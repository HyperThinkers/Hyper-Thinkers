import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <SignUp
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: `
                bg-[#0B0B12]
                border
                border-white/10
                shadow-2xl
                rounded-3xl
                backdrop-blur-xl
              `,
              headerTitle: 'text-white text-3xl font-bold',
              headerSubtitle: 'text-gray-400',
              socialButtonsBlockButton: `
                bg-black/40
                border
                border-white/10
                text-white
                hover:bg-white/10
                transition-all
              `,
              socialButtonsBlockButtonText: 'text-white font-medium',
              formButtonPrimary: `
                bg-white
                text-black
                hover:bg-gray-200
                rounded-xl
                transition-all
              `,
              formFieldInput: `
                bg-white/5
                border-white/10
                text-white
                focus:border-white/30
                focus:ring-0
              `,
              formFieldLabel: 'text-gray-300',
              footerActionText: 'text-gray-400',
              footerActionLink: 'text-white hover:text-gray-300',
              dividerLine: 'bg-white/10',
              dividerText: 'text-gray-500',
            },
          }}
        />
      </div>
    </main>
  )
}