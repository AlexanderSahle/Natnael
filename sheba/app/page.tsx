import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Mic, Sparkles, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering African Languages with AI
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl">
              Bridging linguistic divides through advanced natural language processing and speech recognition
              technologies tailored for African languages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Join the Beta
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="AI technology visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Sheba.ai, we're on a mission to preserve and empower African languages through cutting-edge AI
                technology. We believe that language is the cornerstone of cultural identity and knowledge sharing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                By developing advanced natural language processing and speech recognition systems specifically designed
                for African languages, we're breaking down communication barriers and creating new opportunities for
                millions of people.
              </p>
              <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology is built to understand, process, and generate African languages with unprecedented
              accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Multilingual NLP</h3>
              <p className="text-gray-600">
                Advanced natural language processing tailored specifically for African languages, with support for over
                100 languages and dialects.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Mic className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Speech Recognition</h3>
              <p className="text-gray-600">
                State-of-the-art speech recognition systems that accurately capture the unique phonetics and tonal
                qualities of African languages.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Translation</h3>
              <p className="text-gray-600">
                Real-time translation services that preserve cultural context and nuance across African languages and
                global languages.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Low-Resource Solutions</h3>
              <p className="text-gray-600">
                Innovative techniques to build robust AI models even for languages with limited digital resources or
                documentation.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Collaboration</h3>
              <p className="text-gray-600">
                Tools and platforms for linguists, developers, and communities to contribute to language preservation
                and AI model improvement.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">API Integration</h3>
              <p className="text-gray-600">
                Developer-friendly APIs that make it easy to integrate our language technologies into applications,
                websites, and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white" id="use-cases">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Sheba.ai is transforming communication across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Language Technology?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower African languages with cutting-edge AI technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

const useCases = [
  {
    title: "Education",
    image: "/placeholder.svg?height=500&width=800",
    description:
      "Enabling students to learn in their native languages with AI-powered translation and educational content.",
  },
  {
    title: "Healthcare",
    image: "/placeholder.svg?height=500&width=800",
    description:
      "Breaking down language barriers in healthcare with accurate medical translation and voice interfaces.",
  },
  {
    title: "Business",
    image: "/placeholder.svg?height=500&width=800",
    description:
      "Helping businesses reach new markets with localized content and customer service in African languages.",
  },
  {
    title: "Government",
    image: "/placeholder.svg?height=500&width=800",
    description: "Supporting public services with multilingual interfaces that serve diverse populations.",
  },
  {
    title: "Media",
    image: "/placeholder.svg?height=500&width=800",
    description: "Enabling content creators to produce and distribute media in multiple African languages.",
  },
  {
    title: "Research",
    image: "/placeholder.svg?height=500&width=800",
    description: "Advancing linguistic research with tools for analyzing and preserving African languages.",
  },
]

