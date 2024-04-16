/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { cn } from "../../utils/cn";

const SectionVisibility = ({ children, sectionName, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer setup with options for better precision
  const observerRef = React.createRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        setIsVisible(entries[0].isIntersecting);
      },
      {
        root: null, // Observe the entire viewport
        threshold: 0.5, // Consider section visible when 50% is in view
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, [observerRef]);

  useEffect(() => {
    if (isVisible) {
      console.log(`Section ${sectionName} is now visible!`);
    }
  }, [isVisible, sectionName]);

  return (
    <section ref={observerRef} id={sectionName} className={cn(className)}>
      {children}
    </section>
  );
};

export default SectionVisibility;
