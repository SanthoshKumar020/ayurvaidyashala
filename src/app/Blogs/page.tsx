// app/experts/page.jsx or pages/experts.jsx

import FeaturedBlogSection from './FeaturedBlogSection';
import ExpertsBanner from './BlogBanner';


export default function ExpertsPage() {
  return (
    <main>
        <FeaturedBlogSection/>
      <ExpertsBanner />
      {/* Add your experts content here */}
    </main>
  );
}
