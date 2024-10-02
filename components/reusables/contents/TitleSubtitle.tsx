// src/components/TitleSubtitle.jsx
import React from "react";

interface TitleSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({ title, subtitle, ...props }) => {
  return (
    <div className="text-left my-8 p-2" {...props}>
      <p className="text-primary tracking-widest relative after:content-[''] after:absolute after:w-12 after:h-[1px] after:bg-primary after:top-1/2 after:mx-2">
        {subtitle}
      </p>
      <h1 className="text-3xl md:text-4xl font-thin">{title}</h1>
    </div>
  );
};

export default TitleSubtitle;
