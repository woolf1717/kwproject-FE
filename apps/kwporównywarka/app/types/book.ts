export interface Book extends BookNumber {
  title: string;
  sectionZero: string;
  sectionOneDesignation: string;
  sectionOneRightsList: string;
  sectionTwo: string;
  sectionThree: string;
  sectionFour: string;
}

export interface BookNumber {
  id: string;
  departmentCode: string;
  bookNumber: string;
  controlNumber: string;
}
