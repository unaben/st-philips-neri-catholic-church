import { SACRAMENT_LABEL } from "../../SponsorForm/constants";
import type { Sacrament } from "@/types/registration";
import styles from "./SponsorFormBanner.module.css";

interface SponsorFormBannerProps {
  candidateName?: string;
  sacrament?: Sacrament;
}

export function SponsorFormBanner({
  candidateName,
  sacrament,
}: SponsorFormBannerProps) {
  const sacramentLabel = sacrament
    ? SACRAMENT_LABEL[sacrament]
    : "Confirmation or First Holy Communion";

  return (
    <div className={styles.banner} role="note">
      <p className={styles.text}>
        {candidateName ? (
          <>
            This form is part of <strong>{candidateName}&rsquo;s</strong>{" "}
            {sacramentLabel} enrolment.
          </>
        ) : (
          <>This form is part of a {sacramentLabel} enrolment.</>
        )}{" "}
        It must be submitted online or printed and returned to the parish office
        to complete the registration - the enrolment isn&rsquo;t finished until
        this form is in as well.
      </p>
    </div>
  );
}
