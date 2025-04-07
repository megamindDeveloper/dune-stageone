import React from 'react';

interface TestimonialCardProps {
  name: string;
  text: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, avatarUrl }) => {
  return (
    <div className="bg-[#FAF1FD] p-6 rounded-lg shadow-sm h-full flex flex-col justify-between transition-all duration-300 hover:shadow-md">
      <div>
        <div className="mb-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${avatarUrl})` }}
            />
          </div>
        </div>
        <p className="text-gray-800 mb-4">{text}</p>
      </div>
      <p className="text-gray-700 font-medium">- {name}</p>
    </div>
  );
};

export default TestimonialCard;
