import React from "react";

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  emoji,
  title,
  description,
}) => {
  return (
    <div className="flex w-[50%] h-full flex-col gap-y-1">
      <span className="text-[1.2rem] lg:text-[1.4rem]">{emoji}</span>
      <h1 className="lg:font-bold font-semibold lg:text-[1.3rem] text-[1.1rem] -tracking-[0.2px]">
        {title}
      </h1>
      <p className="lg:leading-[2rem] leading-[1.7rem] lg:text-[1rem] text-[0.9rem] tracking-[0.2px]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
