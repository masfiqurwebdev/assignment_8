export default function LearningTips() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Learning Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Study Techniques */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Study Techniques
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Use active recall & spaced repetition</li>
              <li>✔ Break study sessions into chunks (Pomodoro)</li>
              <li>✔ Take notes in your own words</li>
              <li>✔ Practice with real examples</li>
            </ul>
          </div>

          {/* Time Management */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Time Management Tips
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Plan your day with a to-do list</li>
              <li>✔ Set clear priorities</li>
              <li>✔ Avoid multitasking</li>
              <li>✔ Take regular breaks</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}