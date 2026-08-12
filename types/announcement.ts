export interface Announcement {
  id: string;
  title: string;
  plainText: string;
  richTextHtml: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAnnouncementInput {
  title: string;
  plainText: string;
  richTextHtml: string;
}

export interface UpdateAnnouncementInput {
  title: string;
  plainText: string;
  richTextHtml: string;
}
