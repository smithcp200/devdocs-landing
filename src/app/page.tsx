import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            DevDocs<span className="text-blue-600">.ai</span>
          </span>
          <a
            href="#waitlist"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Auto-generate always-up-to-date{" "}
            <span className="text-blue-600">documentation</span> from your
            codebase
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Point DevDocs AI at your repo and get beautiful, comprehensive docs
            that stay current as your code evolves. No manual maintenance required.
          </p>
          <div className="mt-10 flex justify-center" id="waitlist">
            <WaitlistForm />
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Free during beta. No credit card required.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why DevDocs AI?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueProp
              icon="⚡"
              title="Saves hours every week"
              description="Stop writing docs manually. DevDocs AI reads your code, comments, and structure to generate docs automatically."
            />
            <ValueProp
              icon="🔄"
              title="Always current"
              description="Docs update when your code changes. Never worry about stale documentation misleading your team again."
            />
            <ValueProp
              icon="📦"
              title="Works with any repo"
              description="TypeScript, Python, Go, Rust — any language, any framework. Just connect your repository and go."
            />
            <ValueProp
              icon="☁️"
              title="Hosted for you"
              description="Beautiful docs site deployed and managed for you. Share a link with your team or make it public."
            />
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            See it in action
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Here&apos;s what DevDocs AI generates for a real open-source project — fully
            automatic, zero configuration.
          </p>
          <div className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-sm text-gray-300 font-mono">
                docs.devdocs.ai/example-project
              </span>
            </div>
            <div className="p-8 sm:p-12 text-center">
              <div className="space-y-4 text-left max-w-lg mx-auto font-mono text-sm">
                <div className="text-gray-400">// Generated documentation</div>
                <div>
                  <span className="text-blue-600">## </span>
                  <span className="text-gray-800 font-semibold">
                    Authentication Module
                  </span>
                </div>
                <div className="text-gray-600 pl-4 border-l-2 border-blue-200">
                  Handles user login, session management, and token refresh.
                  Supports OAuth2 and API key authentication.
                </div>
                <div className="mt-4">
                  <span className="text-blue-600">### </span>
                  <span className="text-gray-800">Functions</span>
                </div>
                <div className="text-gray-600 text-xs space-y-1 pl-4">
                  <div>
                    <code className="bg-gray-200 px-1 rounded">login(email, password)</code>{" "}
                    — Authenticates user credentials
                  </div>
                  <div>
                    <code className="bg-gray-200 px-1 rounded">refreshToken(token)</code>{" "}
                    — Rotates expired session tokens
                  </div>
                  <div>
                    <code className="bg-gray-200 px-1 rounded">logout()</code>{" "}
                    — Invalidates current session
                  </div>
                </div>
              </div>
              <p className="mt-8 text-sm text-gray-400">
                Demo site coming soon —{" "}
                <a href="#waitlist" className="text-blue-600 hover:underline">
                  join the waitlist
                </a>{" "}
                to get early access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-medium text-gray-700 italic">
            &ldquo;Built for developers, by AI agents.&rdquo;
          </p>
          <p className="mt-4 text-gray-500">
            DevDocs AI is being built by an autonomous engineering team focused on
            solving the documentation pain every developer faces.
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DevDocs AI. All rights reserved.
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
            <a href="mailto:hello@devdocs.ai" className="hover:text-gray-700">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ValueProp({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
