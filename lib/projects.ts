/* ============================================
   PROJECT DATA
   
   This is the single source of truth for ALL
   projects across the site. Every card, modal,
   and gallery page pulls from this file.
   
   To add a new project:
   1. Add an object to the appropriate array
   2. Drop the image in public/images/
   3. It automatically appears everywhere
   
   TypeScript interfaces at the top define the
   shape of each project — if you forget a field,
   the compiler will tell you before the browser does.
   ============================================ */

/* ============================================
   TYPES
   
   'category' is a union type — it can ONLY be
   one of these 3 strings. This prevents typos
   and gives autocomplete in your editor.
   ============================================ */
export type ProjectCategory = "baking" | "crochet" | "code";

export interface Project {
  slug: string;          // URL-friendly ID (e.g. "strawberry-cake")
  title: string;         // Display name
  description: string;   // Short blurb for the card
  image: string;         // Path relative to /public
  category: ProjectCategory;
  tags: string[];        // Labels shown on the card
  featured: boolean;     // Show on homepage? (true = yes)

  // Baking-specific
  recipe?: string;       // Full recipe text (shown in modal)
  prepTime?: string;
  cookTime?: string;
  servings?: string;

  // Crochet-specific
  tutorialUrl?: string;  // External link to the tutorial you followed
  tutorialBy?: string;   // Credit the tutorial creator
  materials?: string[];  // Yarn, hook size, etc.
  difficulty?: string;

  // Code-specific
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  role?: string;
}

/* ============================================
   BAKING PROJECTS
   
   Replace the placeholder images and recipes
   with your actual content. The recipe field
   supports line breaks with \n — the modal
   component renders these as separate lines.
   ============================================ */
export const bakingProjects: Project[] = [
  {
    slug: "strawberry-layer-cake",
    title: "Strawberry Layer Cake",
    description:
      "Three layers of vanilla sponge with fresh strawberry buttercream and a white chocolate drip.",
    image: "/images/baking/strawberry-cake.jpg",
    category: "baking",
    tags: ["cake", "buttercream"],
    featured: true,
    prepTime: "45 min",
    cookTime: "30 min",
    servings: "12 slices",
    recipe: `Vanilla Sponge:
• 3 cups all-purpose flour
• 2 cups sugar
• 1 cup butter, softened
• 4 large eggs
• 1 cup whole milk
• 1 tbsp vanilla extract
• 1 tbsp baking powder
• ½ tsp salt

1. Preheat oven to 350°F. Grease and line three 8" round pans.
2. Cream butter and sugar until light and fluffy, about 4 minutes.
3. Add eggs one at a time, beating well after each.
4. Mix in vanilla extract.
5. Whisk flour, baking powder, and salt in a separate bowl.
6. Alternate adding dry ingredients and milk to the butter mixture, starting and ending with dry. Mix until just combined.
7. Divide evenly among the three pans.
8. Bake 25-30 minutes until a toothpick comes out clean.
9. Cool in pans 10 min, then turn out onto wire racks.

Strawberry Buttercream:
• 1.5 cups butter, softened
• 5 cups powdered sugar
• ½ cup freeze-dried strawberries, crushed to powder
• 2 tbsp heavy cream
• 1 tsp vanilla

1. Beat butter until smooth and pale.
2. Add powdered sugar 1 cup at a time, mixing on low.
3. Add strawberry powder, cream, and vanilla. Beat on high 3 min until fluffy.
4. Frost between layers, then crumb coat and chill 30 min before final coat.`,
  },
  {
    slug: "matcha-cupcakes",
    title: "Matcha Cupcakes",
    description:
      "Earthy matcha batter with white chocolate cream cheese frosting and a gold leaf accent.",
    image: "/images/baking/matcha-cupcakes.jpg",
    category: "baking",
    tags: ["cupcakes", "matcha"],
    featured: true,
    prepTime: "20 min",
    cookTime: "22 min",
    servings: "12 cupcakes",
    recipe: `Matcha Batter:
• 1½ cups all-purpose flour
• 2 tbsp ceremonial grade matcha
• 1 cup sugar
• ½ cup butter, melted
• 2 eggs
• ½ cup milk
• 1 tsp vanilla
• 1½ tsp baking powder

1. Preheat oven to 350°F. Line a 12-cup muffin tin.
2. Sift flour, matcha, and baking powder together.
3. Whisk butter, sugar, eggs, milk, and vanilla.
4. Fold dry into wet until just combined.
5. Fill liners ⅔ full. Bake 20-22 min.

White Chocolate Cream Cheese Frosting:
• 8 oz cream cheese, softened
• ¼ cup butter, softened
• 4 oz white chocolate, melted and cooled
• 2 cups powdered sugar
• 1 tsp vanilla

1. Beat cream cheese and butter until smooth.
2. Add cooled white chocolate, mix until combined.
3. Add powdered sugar and vanilla, beat until fluffy.
4. Pipe onto cooled cupcakes with a 1M tip.`,
  },
  {
    slug: "sourdough-boule",
    title: "Sourdough Boule",
    description:
      "72-hour cold ferment with a crispy blistered crust and open, airy crumb.",
    image: "/images/baking/sourdough.jpg",
    category: "baking",
    tags: ["bread", "sourdough"],
    featured: true,
    prepTime: "30 min + 72 hrs",
    cookTime: "45 min",
    servings: "1 loaf",
    recipe: `Ingredients:
• 500g bread flour
• 350g water (70% hydration)
• 100g active starter
• 10g salt

Day 1 — Mix & Bulk Ferment:
1. Mix flour and water, let rest 30 min (autolyse).
2. Add starter and salt. Stretch and fold to incorporate.
3. Perform 4 sets of stretch and folds, 30 min apart.
4. Cover and bulk ferment at room temp 4-5 hours until doubled.

Day 1 — Shape & Cold Ferment:
5. Turn dough onto floured surface. Pre-shape into a round.
6. Rest 20 min. Final shape into a tight boule.
7. Place seam-side up in a floured banneton.
8. Cover and refrigerate 48-72 hours.

Day 3 or 4 — Bake:
9. Preheat oven to 500°F with Dutch oven inside for 1 hour.
10. Turn dough onto parchment. Score with a lame or razor.
11. Place in Dutch oven, lid on. Bake 20 min.
12. Remove lid. Reduce to 450°F. Bake 20-25 min more until deep golden.
13. Cool completely on a wire rack before slicing (at least 1 hour).`,
  },
];

/* ============================================
   CROCHET PROJECTS
   
   The tutorialUrl field links to the YouTube
   video or blog post you followed. The modal
   will show a "Watch Tutorial" button.
   ============================================ */
export const crochetProjects: Project[] = [
  {
    slug: "granny-square-blanket",
    title: "Granny Square Blanket",
    description:
      "Classic granny squares in autumn tones, joined as you go for a seamless finish.",
    image: "/images/crochet/granny-blanket.jpg",
    category: "crochet",
    tags: ["blanket", "granny square"],
    featured: true,
    tutorialUrl: "https://youtube.com/example",
    tutorialBy: "TL Yarn Crafts",
    materials: [
      "Worsted weight yarn in 4 autumn colors",
      "5.0mm (H/8) crochet hook",
      "Tapestry needle",
      "Scissors",
    ],
    difficulty: "Beginner",
  },
  {
    slug: "amigurumi-bear",
    title: "Amigurumi Bear",
    description:
      "Tiny stuffed bear with a crocheted bow tie and button eyes. About 6 inches tall.",
    image: "/images/crochet/amigurumi-bear.jpg",
    category: "crochet",
    tags: ["amigurumi", "stuffed animal"],
    featured: true,
    tutorialUrl: "https://youtube.com/example",
    tutorialBy: "Club Crochet",
    materials: [
      "DK weight yarn in brown and red",
      "3.5mm (E/4) crochet hook",
      "Safety eyes (9mm)",
      "Polyester fiberfill",
      "Tapestry needle",
    ],
    difficulty: "Intermediate",
  },
  {
    slug: "summer-crop-top",
    title: "Summer Crop Top",
    description:
      "Mesh stitch crop in cotton yarn, perfect for layering. Customizable to any size.",
    image: "/images/crochet/crop-top.jpg",
    category: "crochet",
    tags: ["wearable", "mesh stitch"],
    featured: true,
    tutorialUrl: "https://youtube.com/example",
    tutorialBy: "Made by Mika",
    materials: [
      "Cotton DK yarn (2-3 skeins)",
      "4.0mm (G/6) crochet hook",
      "Stitch markers",
      "Tapestry needle",
    ],
    difficulty: "Intermediate",
  },
];

/* ============================================
   CODE PROJECTS
   
   These don't use the modal — they link to
   individual case study pages (Phase 3).
   Update githubUrl and liveUrl with your
   actual links.
   ============================================ */
export const codeProjects: Project[] = [
  {
    slug: "knox-clinic-dashboard",
    title: "Knox Clinic Dashboard",
    description:
      "Full-stack clinic management system with patient scheduling, analytics dashboard, and role-based access.",
    image: "/images/code/knox-clinic.png",
    category: "code",
    tags: ["React", "Flask"],
    featured: true,
    techStack: ["React", "Flask", "MySQL", "Bootstrap", "Docker"],
    githubUrl: "https://github.com/yourusername/knox-clinic",
    role: "Full-stack developer",
  },
  {
    slug: "study-pack",
    title: "Study Pack",
    description:
      "AI-powered study tool with flashcards, quizzes, and progress tracking for students.",
    image: "/images/code/study-pack.png",
    category: "code",
    tags: ["Next.js", "AI"],
    featured: true,
    techStack: ["Next.js", "Python", "Tailwind CSS", "OpenAI API"],
    githubUrl: "https://github.com/yourusername/study-pack",
    role: "Lead developer",
  },
  {
    slug: "creative-corner-portfolio",
    title: "This Portfolio",
    description:
      "The site you're looking at — built with Next.js 16, Tailwind v4, and TypeScript.",
    image: "/images/code/portfolio.png",
    category: "code",
    tags: ["Next.js", "Tailwind"],
    featured: true,
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/yourusername/my-creative-corner",
    liveUrl: "https://mycreativecorner.vercel.app",
    role: "Solo project",
  },
];

/* ============================================
   HELPER FUNCTIONS
   
   These let you grab projects by category or
   filter for featured ones. Used by the homepage
   and gallery pages.
   ============================================ */
export const allProjects: Project[] = [
  ...bakingProjects,
  ...crochetProjects,
  ...codeProjects,
];

export function getFeaturedByCategory(category: ProjectCategory): Project[] {
  return allProjects.filter(
    (p) => p.category === category && p.featured
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
