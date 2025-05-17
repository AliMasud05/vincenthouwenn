export default function CtaBanner() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-green-700 text-white rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Transform Your Home,Take Action Now for
                <br />
                Better Living!
              </h2>
              <p className="text-green-100 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </p>
            </div>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Get Started with Flap Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
