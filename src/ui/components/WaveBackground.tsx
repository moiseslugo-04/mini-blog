'use client'

export function WaveBackground() {
  return (
    <div
      aria-hidden='true'
      className="
        absolute inset-0 -z-10
        bg-no-repeat bg-cover bg-center
        bg-[url('/bg-hero-light.svg')]
        dark:bg-[url('/bg-hero-dark.svg')]
      "
    ></div>
  )
}
