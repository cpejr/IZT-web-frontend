const Options = {
  course: {
    title: 'Você ainda não tem acesso ao nosso curso!',
    text: 'Lamentamos informar que o seu acesso ao curso foi negado. Este curso é exclusivo para aqueles que se inscreveram previamente. No entanto, estamos aqui para ajudá-lo a adquirir este curso e outros produtos que possam ser de seu interesse. Entre em contato conosco pelo formulário a baixo para adquiri-lo',
    formTitle: 'Adquira o nosso curso!',
    imageURL: 'src/assets/accessDeniedPage/BGCourse.png',
  },
  software: {
    title: 'Você ainda não tem acesso ao nosso software!',
    text: 'Lamentamos informar que o seu acesso ao nosso software foi negado. Este software é exclusivo para aqueles que se inscreveram previamente. No entanto, estamos aqui para ajudá-lo a adquirir este software e outros produtos que possam ser de seu interesse. Entre em contato conosco pelo formulário a baixo para adquiri-lo',
    formTitle: 'Adquira o acesso!',
    imageURL: 'src/assets/accessDeniedPage/BGSoftware.jpg',
  },
};

export default function PageText(texts) {
  switch (texts) {
    case 'course':
      return Options.course;
    case 'software':
    default:
      return Options.software;
  }
}

export function BGImage(texts) {
  switch (texts) {
    case 'course':
      return Options.course;
    case 'software':
    default:
      return Options.software;
  }
}
