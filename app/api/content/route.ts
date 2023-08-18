import { NextResponse } from 'next/server';

// Dummy data
const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
  },
  {
    title: 'Sample Post 2',
    slug: 'sample-post-2',
    content:
      'This is another sample post with some content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'A Journey Through Coding',
    slug: 'coding-journey',
    content:
      'Join me as I share my experiences and challenges on the road of coding. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Exploring Nature',
    slug: 'exploring-nature',
    content: `Nature has so much to offer. In this post, I'll take you through my recent adventures in the wilderness. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  // Add more posts here...
  {
    title: 'Artistic Creations',
    slug: 'artistic-creations',
    content: `Unleash your inner artist! In this post, we'll dive into various forms of art and creative expression. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`
  },
  {
    title: 'Recipe Corner: Delicious Desserts',
    slug: 'recipe-desserts',
    content:
      'Indulge in the world of desserts with these mouthwatering recipes. Satisfy your sweet tooth with these delectable treats. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
  },
  {
    title: 'Tech Talk: Latest Gadgets',
    slug: 'tech-latest-gadgets',
    content:
      'Stay updated with the tech world! Discover the latest gadgets and innovations that are shaping our future. Itaque earum rerum hic tenetur a sapiente delectus.'
  },
  {
    title: 'Book Review: Sci-Fi Wonders',
    slug: 'book-review-sci-fi',
    content:
      'Dive into the mesmerizing realm of science fiction through these captivating book reviews. Transport yourself to distant galaxies and futuristic realities. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'Fitness Journey: Overcoming Challenges',
    slug: 'fitness-overcoming-challenges',
    content:
      'Embark on a fitness journey filled with obstacles and triumphs. Learn how to overcome challenges and stay committed to a healthier lifestyle. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Travel Diaries: Coastal Retreat',
    slug: 'travel-coastal-retreat',
    content:
      'Join me as I recount my serene coastal retreat. Discover hidden gems, soothing waves, and breathtaking sunsets. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  }
];

// The array now contains a total of 11 dummy objects.

export async function GET() {
  return NextResponse.json(posts);
}
