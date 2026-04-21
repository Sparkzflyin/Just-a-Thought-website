function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  // eslint-disable-next-line sonarjs/slow-regex -- negated class is linear, no catastrophic backtracking
  const text = content.replace(/<[^>]*>/g, ""); // Strip HTML tags
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

const postsContent = [
  {
    slug: "the-power-of-support",
    title: "THE POWER OF SUPPORT: INCREASING YOUR CONVERSION RATE",
    author: "Autumn Tuxward",
    date: "2026-12-28",
    category: "Leadership",
    excerpt:
      "How often do we say that we support people and their dreams? How often have we been told that? Countless. Now, let’s compare that to the amount of time that proclaimed support has actually manifested into tangible support...",
    content: `
      <p><strong>HOW OFTEN DO WE SAY THAT WE SUPPORT PEOPLE AND THEIR DREAMS? HOW OFTEN HAVE WE BEEN TOLD THAT? COUNTLESS. NOW, LET’S COMPARE THAT TO THE AMOUNT OF TIME THAT PROCLAIMED SUPPORT HAS ACTUALLY MANIFESTED INTO TANGIBLE SUPPORT. I’M WILLING TO GUESS THAT THE CONVERSION RATE IS IN THE SINGLE DIGITS, BOTH IN THE GIVING AND RECEIVING. WE GOTTA DO BETTER.</strong></p>
      <p>To address this, we have to look at it from a few different angles: why support matters, what support actually looks like, and finally, the value add of support.</p>
      <h3>WHY SUPPORT MATTERS</h3>
      <p>The first is why support matters. Well, because life is scary and doing hard things is, well, hard. If it wasn’t, everyone would be doing hard things—but the fact is, they aren't. Statistics state that most people are taking the easy way out; they are consumers vs. creators. Is it because they are lazy or lack imagination, intelligence, or resources? In some cases, sure. In most cases? No.</p>
      <p>We are all born with gifts, talents, and the ability to thrive in those things, so what’s the real reason? Because creation is an act of vulnerability. Creation is an insight into the heart and mind of the creator.</p>
      <blockquote>“WHAT A PERSON PUTS INTO THE WORLD TELLS YOU ABOUT WHO THEY ARE, WHAT THEY VALUE, WHAT THEY HAVE BEEN THROUGH, AND THE MOST POWERFUL OF ALL… WHAT THEY DREAM TO BE.”</blockquote>
      <p>Vulnerability, ladies and gentlemen, is something we ALL struggle with. So, when a friend, spouse, child, co-worker, Facebook friend, whomever, asks you for support, know that they are asking you to create an environment of safety around their entire world. That’s Big. Don’t mess it up!</p>
    `,
  },
  {
    slug: "faith-and-action",
    title: "FAITH IS THE FOUNDATION, BUT ACTION IS THE ARCHITECTURE",
    author: "Autumn Tuxward",
    date: "2026-12-21",
    category: "Mindset",
    excerpt:
      "I am a Type A personality... always have been. I like to do things a certain way and I’m big on the pursuit of excellence. “We are not doing anything halfway over here.”",
    content: `
      <p><strong>I AM TYPE A PERSONALITY... ALWAYS HAVE BEEN. I LIKE TO DO THINGS A CERTAIN WAY AND I’M BIG ON THE PURSUIT OF EXCELLENCE. “WE ARE NOT DOING ANYTHING HALFWAY OVER HERE.”</strong></p>
      <p>I ALSO TEND TO HAVE A LOT OF IDEAS—GOOD ONES, I THINK—WHICH IS GREAT IN THAT I’M ALWAYS LOOKING FOR SOLUTIONS, BUT OVERWHELMING IN THAT I’VE ALWAYS STRUGGLED TO FIGURE OUT WHAT IDEA TO PURSUE. COUPLE THAT WITH THAT WHOLE "GOTTA BE PERFECT" TRAIT AND IT EQUATED TO, YEAH, ABSOLUTELY NOTHING.</p>
      <p>We often hear that we need to "believe in ourselves," and while that’s a cute starting point, it’s a fragile one if it stands alone. Our own understanding is limited; our energy fluctuates, and our perspective is often clouded by the immediate hurdles in front of us. To truly move mountains, we need a mixed approach that cannot be defeated: Faith, Action and the Compound Effect. None of these are easy. period! Sorry, if you were looking for the 20 second minimal effort plan… wrong blog. You still here? Great.. this is what you need to know… patience is THE primary component to the compound effect. You have to be willing to see it through, and that’s hard because you have to push past the small gains to get to the major ones.</p>
    `,
  },
];

export const posts = postsContent.map((post) => ({
  ...post,
  readingTime: calculateReadingTime(post.content),
}));
