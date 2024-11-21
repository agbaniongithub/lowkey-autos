import { useEffect, useRef, useState } from "react";

const InfiniteScrollPage = () => {
  const [sections, setSections] = useState(["hero"]); // Initial hero section
  const loadMoreRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a new section when the observer is triggered
          setSections((prevSections) => [...prevSections, "newSection"]);
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <div>
      {sections.map((section, index) => (
        <Section key={index} type={section} />
      ))}
      {/* Infinite scroll trigger */}
      <div ref={loadMoreRef} className="h-16"></div>
    </div>
  );
};

const Section = ({ type }) => {
  if (type === "hero") {
    return (
      <section className="min-h-screen bg-hero bg-cover bg-center flex items-center justify-center">
        {/* Hero content */}
        <div className="text-white text-center p-12">
          <h1 className="text-5xl font-bold mb-6">Discover Your Dream Car</h1>
          <p className="text-xl mb-8">
            Luxury redefined. Explore our exclusive collection.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-20">
      {/* Example Content for Loaded Section */}
      <div className="max-w-xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Explore Our Collections
        </h2>
        <p className="text-gray-600">
          Discover the perfect blend of luxury, comfort, and performance.
        </p>
      </div>
    </section>
  );
};

export default InfiniteScrollPage;
