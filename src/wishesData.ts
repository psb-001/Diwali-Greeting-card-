export const diwaliWishes = [
  "May the glow of the diyas light up your path with success, and may the sweetness of the mithai fill your life with joy. Happy Diwali!",
  
  "Wishing you a Diwali where the divine light illuminates every corner of your home, bringing peace, prosperity, and endless happiness to you and your family.",
  
  "May this festival of lights be a festival of joy, peace, and prosperity for you. May the lamps brighten your life and rangoli add vibrant colors to it.",
  
  "As the holy occasion of Diwali is here, may the light of the diyas guide you towards a life of happiness, and may the blessings of Goddess Lakshmi fill your home with wealth.",
  
  "Wishing you a Diwali that is as bright as the festive lights, as sweet as the shared treats, and as joyful as the laughter of loved ones.",
  
  "May the sparkle of the lamps and the sound of the fireworks bring joy and contentment to your heart. Wishing you a wonderful and blessed Diwali.",
  
  "Let this Diwali burn away all your bad times and usher in good times. May you be blessed with happiness, good health, and success.",
  
  "On this auspicious festival, may the glow of joy, prosperity, and happiness illuminate your life and your home for the coming year.",
  
  "May the vibrant colors of rangoli and the bright lights of diyas fill your life with new opportunities and new heights of success. Happy Diwali!",
  
  "Sending you warm wishes for a Diwali where every diya light brings a glow of happiness to your face and enlightens your soul."
];

export const getRandomWish = (): string => {
  const randomIndex = Math.floor(Math.random() * diwaliWishes.length);
  return diwaliWishes[randomIndex];
};
