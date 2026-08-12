import { promises as fs } from "fs";
import path from "path";
import type {
  RegistrationEnrolmentRecord,
  RegistrationSponsorRecord,
  EnrolmentWithSponsorStatus,
  Sacrament,
  SponsorFormSource,
} from "@/types/registration";

/**
 * File-backed store, auto-created and gitignored - fine for dev or a small
 * parish deployment. This is what links a Confirmation or First Holy
 * Communion enrolment to the sponsor form submitted (online or on paper)
 * against it - the same sponsor form serves both sacraments, so every
 * record here carries a `sacrament` alongside its id. If you outgrow this,
 * swap it for a real database and keep the same function signatures so
 * nothing else has to change.
 */

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "registrations.json");

interface Shape {
  enrolments: RegistrationEnrolmentRecord[];
  sponsorForms: RegistrationSponsorRecord[];
}

const empty: Shape = { enrolments: [], sponsorForms: [] };

async function readData(): Promise<Shape> {
  try {
    const raw = await fs.readFile(FILE, "utf-8");
    return JSON.parse(raw) as Shape;
  } catch {
    await writeData(empty);
    return empty;
  }
}

async function writeData(data: Shape): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(data, null, 2), "utf-8");
}

export const registrationStore = {
  async createEnrolment(input: {
    id: string;
    sacrament: Sacrament;
    nameOfChild: string;
    email: string;
  }): Promise<RegistrationEnrolmentRecord> {
    const data = await readData();
    const enrolment: RegistrationEnrolmentRecord = {
      ...input,
      createdAt: new Date().toISOString(),
    };
    data.enrolments.push(enrolment);
    await writeData(data);
    return enrolment;
  },

  async getEnrolmentById(
    id: string
  ): Promise<RegistrationEnrolmentRecord | null> {
    const data = await readData();
    return data.enrolments.find((item) => item.id === id) ?? null;
  },

  async createSponsorForm(input: {
    id: string;
    enrolmentId: string;
    sacrament: Sacrament;
    sponsorName: string;
    source: SponsorFormSource;
  }): Promise<RegistrationSponsorRecord> {
    const data = await readData();
    const sponsorForm: RegistrationSponsorRecord = {
      ...input,
      createdAt: new Date().toISOString(),
    };
    data.sponsorForms.push(sponsorForm);
    await writeData(data);
    return sponsorForm;
  },

  /**
   * Each enrolment paired with whether its sponsor form has come in yet
   * (and via which route). Nothing renders this today - it's the natural
   * source for an admin reconciliation page later.
   */
  async listEnrolmentsWithSponsorStatus(): Promise<
    EnrolmentWithSponsorStatus[]
  > {
    const data = await readData();
    return data.enrolments
      .map((enrolment) => {
        const sponsorForm = data.sponsorForms.find(
          (form) => form.enrolmentId === enrolment.id
        );
        return {
          ...enrolment,
          sponsorFormReceived: Boolean(sponsorForm),
          sponsorFormSource: sponsorForm?.source ?? null,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  },
};
