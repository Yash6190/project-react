import React from "react";

export default function PersonalTraining() {
  return (
    <div>
      <div className="w-11/12 m-auto md:w-10/12 py-20 md:mt-0">
        <div className="pt-20 md:w-1/2">
          <h1 className="text-2xl mb-4">Personal Training</h1>
          <p>
            It’s our commitment to your health. We deliver effective, efficient
            workouts paired with nutritional guidance to help you reach your
            fitness peak.
          </p>
          <h1 className="text-2xl py-4">
            6-step success: Your fitness roadmap
          </h1>
          <p>
            We’ve developed a meticulously crafted, comprehensive six-step
            process that acts as your personal roadmap, guiding you steadily
            towards your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10">
          {/* Existing Steps */}
          {["Personalised Fitness Assessment", "Basic Movement Assessments", "Precision Body Composition Scan", "Adaptable Fitness Assessments", "Personalised Programs & Consistent Support", "Personalised Nutrition Guidance"].map((title, index) => (
            <div key={index}>
              <p className="font-bold">{`0${index + 1}.`}</p>
              <h1 className="text-lg font-bold">{title}</h1>
              <p className="py-4">
                {/* Add descriptions for each step here */}
                {`Description for ${title}.`}
              </p>
              <div className="flex">
                <div className="border-b border-black flex items-center">
                  <p className="mr-2 font-bold">{title}</p>
                  <p className="font-bold">→</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Sections */}
        <div className="pt-20 md:w-1/2">
          <h1 className="text-2xl mb-4">Workout Routines</h1>
          <p>
            Our workout routines are designed to be adaptable and effective, catering to all fitness levels. Whether you prefer strength training, cardio, or flexibility exercises, we have a plan for you.
          </p>
          <h2 className="text-lg font-bold py-4">Sample Routine:</h2>
          <ul className="list-disc pl-5">
            <li>Warm-up: 10 minutes of light cardio</li>
            <li>Strength Training: 30 minutes focusing on major muscle groups</li>
            <li>Cardio: 20 minutes of high-intensity interval training (HIIT)</li>
            <li>Cool Down: 10 minutes of stretching</li>
          </ul>
        </div>

        <div className="pt-20 md:w-1/2">
          <h1 className="text-2xl mb-4">Diet Tips</h1>
          <p>
            Nutrition plays a crucial role in achieving your fitness goals. Here are some tips to help you maintain a balanced diet:
          </p>
          <ul className="list-disc pl-5">
            <li>Incorporate a variety of fruits and vegetables into your meals.</li>
            <li>Stay hydrated by drinking plenty of water throughout the day.</li>
            <li>Choose whole grains over refined grains for better nutrition.</li>
            <li>Limit processed foods and added sugars.</li>
          </ul>
        </div>

        <div className="pt-20 md:w-1/2">
          <h1 className="text-2xl mb-4">Weight Management Tips</h1>
          <p>
            Whether you're looking to lose weight or gain muscle, here are some effective strategies:
          </p>
          <h2 className="text-lg font-bold py-4">For Weight Loss:</h2>
          <ul className="list-disc pl-5">
            <li>Focus on portion control and mindful eating.</li>
            <li>Incorporate regular physical activity into your routine.</li>
            <li>Set realistic goals and track your progress.</li>
          </ul>
          <h2 className="text-lg font-bold py-4">For Weight Gain:</h2>
          <ul className="list-disc pl-5">
          <li>Increase your calorie intake with nutrient-dense foods.</li>
            <li>Incorporate strength training to build muscle mass.</li>
            <li>Eat more frequently, including snacks between meals.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}