export interface IAdvertisement {
  title: string;
  titleColor?: string;
  caption: string;
  captionColor?: string;
  image: string;
  buttonText: string;
  buttonColor?: string;
  onClick: () => void;
}
