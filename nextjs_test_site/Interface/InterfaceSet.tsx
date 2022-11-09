export interface simpleDataList {
  id: number;
  title: string;
  content?: string;
  link?: string;
  bgColor?: string;
  color?: string;
}

export interface BtnInterface {
  width?: string;
  height?: string;
  bgcolor?: string;
  color?: string;
}

export interface TitleBoxInterface {
  textalign?: string;
  marginbottom?: string;
}

export interface ComponentInterface {
  key: number;
  dataSet: object;
  title?: string;
  content?: string;
}

export interface CssFormat {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: string;
  flex?: string;
  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  aligncontents?: string;
  gap?: string;
  flexwrap?: string;
  margin?: string;
  border?: string;
  padding?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  bgcolor?: string;
  color?: string;
  letterspacing?: string;
  lineheight?: string;
}