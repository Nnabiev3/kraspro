export type FieldValue = string | number | boolean | FieldValue[] | { [key: string]: FieldValue };
export type Fields = Record<string, FieldValue>;

const labels: Record<string, string> = {
  name: "�������� ��������", logo: "����⨯", location: "��த � ॣ���", phone: "����䮭", email: "�����஭��� ����",
  streetAddress: "����", postalCode: "���⮢� ������", hours: "���� ࠡ���", responseTime: "�६� �⢥�",
  licenseNumber: "����� ��業��� MHIC", epaCertification: "����䨪�� EPA", reviewUrl: "��뫪� ��� �㡫���樨 ��뢮�", sameAs: "��樠��� ��",
  brand: "����� �冷� � ����⨯��", brandHref: "��뫪� ����⨯�", navigation: "�㭪�� ����", showHomeOnDesktop: "�����뢠�� <�������> �� ��������",
  showPhone: "�����뢠�� ⥫�䮭", quote: "�᭮���� ������", mobileQuote: "������ ����� �����쭮�� ��࠭�",
  showContacts: "�����뢠�� ���⠪��", servicesTitle: "��������� ������� ���", serviceLinks: "��뫪� �� ��㣨", allServices: "��뫪� �� ��⠫��",
  companyTitle: "��������� ������� ��������", companyLinks: "��뫪� ��������", privacy: "��뫪� �� ����⨪�",
  metaTitle: "SEO-���������", metaDescription: "SEO-���ᠭ��", title: "���������", introduction: "���㯨⥫�� ⥪��",
  hero: "���� ��࠭", eyebrow: "������� ��� ����������", description: "���ᠭ��", image: "����ࠦ����", heroImage: "��� ��ࢮ�� ��࠭�",
  src: "���� ����ࠦ����", alt: "���ᠭ�� ����ࠦ����", label: "�������� ��뫪�", href: "���� ��뫪�", featured: "��࠭�� ��㣨",
  slug: "��㣠", galleryTitle: "��������� ����२", gallery: "��⮣�䨨", processTitle: "��������� ࠧ���� �⠯��", process: "�⠯� ࠡ���",
  faqTitle: "��������� ����ᮢ", faqs: "������ � �⢥��", question: "�����", answer: "�⢥�", cta: "������⥫�� ���� � ����",
  approach: "��� �� ࠡ�⠥�", story: "����� ��������", caption: "������� � ��", quoteTitle: "��������� ࠧ���� � ᬥ�",
  quoteDescription: "�� �室�� � ᬥ��", commitments: "��易⥫��⢠ ��������", areasTitle: "��������� � �����䨨 ࠡ���", areasDescription: "������� ࠡ���",
  contactsTitle: "��������� ��� ���⠪⠬�", nextTitle: "��������� � ᫥���饬 蠣�", nextDescription: "�� �㤥� ��᫥ ���", coverageLink: "��뫪� �� ࠩ���",
  disclosure: "�᫮��� 䨭���஢����", emptyText: "����� �� ������⢨� ��뢮�", reviews: "����", date: "���", rating: "�業�� �� 1 �� 5", author: "��� ����",
  text: "����� ��뢠", service: "��㣠", paragraphs: "������", listTitle: "��������� ᯨ᪠", listDescription: "���ᠭ�� ᯨ᪠",
  communitiesTitle: "��������� ᯨ᪠ ��த��", coverageNote: "�ਬ�砭�� � ���� ���㦨�����", limitsTitle: "��������� ࠧ���� ��࠭�祭��", limits: "��࠭�祭��",
  navLabel: "�������� ��㣨 � ����", h1: "������ ���������", heroSubhead: "����� ��ࢮ�� ��࠭�", introTitle: "��������� � �ࢨ�", intro: "���ᠭ�� ��㣨",
  benefitsTitle: "��������� �२�����", benefits: "�२����⢠", subServices: "��ਠ��� ࠡ��", related: "��易��� ��㣨",
  planningTitle: "��������� � �����஢����", planningText: "����� � �����஢����", focusTitle: "��������� �᭮����� �����", checklist: "�� ���㤨�� ��। ᬥ⮩",
};

export function labelFor(key: string, parent?: string) {
  if (key === "name" && parent === "reviews") return labels.author;
  return labels[key] || key;
}

export const longFields = new Set([
  "description", "introduction", "approach", "story", "quoteDescription", "areasDescription", "nextDescription", "coverageNote",
  "limits", "disclosure", "emptyText", "metaDescription", "heroSubhead", "planningText", "listDescription", "answer", "text", "paragraphs", "intro", "commitments",
]);

export const optionalFields = new Set([
  "brand", "mobileQuote", "phone", "email", "streetAddress", "postalCode", "hours", "responseTime", "licenseNumber",
  "epaCertification", "reviewUrl", "story", "introTitle", "alt",
]);

export const optionalLinkGroups = new Set(["quote", "privacy", "allServices"]);

export function itemTemplate(key: string): FieldValue {
  switch (key) {
    case "navigation": case "serviceLinks": case "companyLinks": return { label: "", href: "/" };
    case "featured": return { slug: "", description: "" };
    case "faqs": return { question: "", answer: "" };
    case "process": case "benefits": case "subServices": return { title: "", description: "" };
    case "gallery": return { title: "", src: "", alt: "" };
    case "reviews": return { name: "", date: "", service: "", rating: 5, text: "" };
    default: return "";
  }
}

export function safeWebUrl(value: string) {
  if (!/^https?:\/\/[^\s\\]+$/i.test(value)) return false;
  try {
    const url = new URL(value);
    return Boolean(url.hostname) && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function safeLocalPath(value: string) {
  return /^\/(?![\/\\])[^\\\s]*$/.test(value);
}

export function isImageSource(value: string) {
  return (safeLocalPath(value) && value !== "/") || safeWebUrl(value);
}
