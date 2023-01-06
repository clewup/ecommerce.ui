export interface IAdvertisement {
  title: string;
  caption?: string;
  image: string;
}

export const mockedAdvertisement: IAdvertisement = {
  title: "ADVERTISEMENT_TITLE",
  caption: "ADVERTISEMENT_CAPTION",
  image: "ADVERTISEMENT_IMAGE",
};
