import { Link } from "react-router";
import Chat from "../components/Chat";

function Home() {
  const initialMessage =
    "Greetings and welcome. I’m JuriBot, your dedicated legal technology assistant. I’m here to guide you through the full spectrum of solutions offered by Legal Tech Army — from compliance automation to AI-powered legal workflows. To better assist you, could you let me know if you're a startup founder, legal professional, or a technology leader exploring innovation in the legal domain?";

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 py-8 md:py-24 mb-12">
        <div className="md:w-1/3">
          <h1 className="text-5xl font-bold mb-8 boldonse-regular">
            Where <span className="text-amber-400"> Law</span> Meets{" "}
            <span className="text-amber-400"> Code</span>, and Innovation Begins
          </h1>
          <p className="text-lg mb-4">
            Uganda’s leading force in legal technology—merging the sharpness of
            law with the agility of tech. From AI policy to startup compliance,
            we cover it all.
          </p>
          <p className="text-gray-700">
            JuriBot is here to guide you through our services, case studies, and
            innovations. Let us help you power up your legal tech journey.
          </p>
        </div>
        <div className="md:w-2/3">
          <Chat
            agentType="welcome"
            initialMessage={initialMessage}
            agentInitials="LB"
          />
        </div>
      </div>

      {/* Meet the Specialists */}
      <div className="mb-12">
        <div className="py-8 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Compliance Specialist */}
          <div className="bg-[#121c30] rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="agent-avatar-placeholder mb-4">CS</div>
              <h5 className="text-xl font-semibold mb-2">ComplianceBot</h5>
              <p className="text-gray-600 mb-4 text-center">
                Navigate complex tech regulations, data privacy laws, and
                startup legal checklists.
              </p>
              <Link
                to="/compliance"
                className="mt-auto py-2 px-4 border border-[#1e2c4c] text-[#b8babc] rounded-md hover:bg-[#18233f] transition-colors"
              >
                Explore Compliance
              </Link>
            </div>
          </div>

          {/* Contracts Agent */}
          <div className="bg-[#121c30] rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="agent-avatar-placeholder mb-4">DA</div>
              <h5 className="text-xl font-semibold mb-2">DraftMaster</h5>
              <p className="text-gray-600 mb-4 text-center">
                Automate and review tech contracts, NDAs, and IP agreements with
                AI-powered tools.
              </p>
              <Link
                to="/contracts"
                className="mt-auto py-2 px-4 border border-[#1e2c4c] text-[#b8babc] rounded-md hover:bg-[#18233f] transition-colors"
              >
                View Tools
              </Link>
            </div>
          </div>

          {/* Policy Insights */}
          <div className="bg-[#121c30] rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="agent-avatar-placeholder mb-4">PI</div>
              <h5 className="text-xl font-semibold mb-2">PolicyIntel</h5>
              <p className="text-gray-600 mb-4 text-center">
                Stay informed on Uganda’s and Africa’s evolving digital laws,
                cyber policies, and AI governance.
              </p>
              <Link
                to="/insights"
                className="mt-auto py-2 px-4 border border-[#1e2c4c] text-[#b8babc] rounded-md hover:bg-[#18233f] transition-colors"
              >
                Read Insights
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {/* Case Studies */}
        <div className="bg-[#121c30] rounded-lg shadow-md overflow-hidden h-full">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">Case Studies</h5>
            <p className="text-gray-600 mb-4">
              See how we’ve helped startups and enterprises protect innovation:
            </p>
            <ul className="divide-y divide-[#18233f]">
              <li className="py-3 px-2">Fintech Startup Compliance Launch</li>
              <li className="py-3 px-2">AI Policy Roadmap for HealthTech</li>
              <li className="py-3 px-2">IP Strategy for Creative Founders</li>
            </ul>
            <div className="mt-4">
              <Link
                to="/cases"
                className="inline-block py-1.5 px-3 text-sm border border-[#1e2c4c] text-[#b8babc] rounded-md hover:bg-[#18233f] transition-colors"
              >
                View All
              </Link>
            </div>
          </div>
        </div>

        {/* Research & Thought Leadership */}
        <div className="bg-[#121c30] rounded-lg shadow-md overflow-hidden h-full">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">
              Research & Thought Leadership
            </h5>
            <p className="text-gray-600 mb-4">
              Dive into our papers and perspectives shaping legal tech in
              Africa:
            </p>
            <ul className="divide-y divide-[#18233f]">
              <li className="py-3 px-2">Tech Law in the Age of AI</li>
              <li className="py-3 px-2">
                Data Protection for African Startups
              </li>
              <li className="py-3 px-2">Cross-border Digital Trade & Law</li>
            </ul>
            <div className="mt-4">
              <Link
                to="/research"
                className="inline-block py-1.5 px-3 text-sm border border-[#1e2c4c] text-[#b8babc] rounded-md hover:bg-[#18233f] transition-colors"
              >
                Explore Research
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
