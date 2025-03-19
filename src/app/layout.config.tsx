import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        Glowy International
      </>
    ),
  },
  links: [
    {
      text: 'Mission',
      url: '/mission',
      active: 'nested-url',
    },
    // Navigation Menu: https://fumadocs.vercel.app/docs/ui/navigation 
    {
      type: 'menu',
      url: '/docs',
      text: 'Learn',
      items: [
        // Game Development
        {
          text: 'Game Development and Design',
          description: 'Create games with Unity and Unreal',
          url: '/docs',
 
          // (optional) Props for Radix UI Navigation Menu item in Home Layout
          menu: {
            className: 'row-span-2',
            // add banner to navigation menu card
            // can be an image or other elements
            banner: <div>Image: Game Development and Design</div>,
          },
        },

        // Extended Reality (XR)
        {
          text: 'Extended Reality (XR)',
          description: 'Develop AR/VR apps for mobile, web, and headsets',
          url: '/docs',
 
          // (optional) Props for Radix UI Navigation Menu item in Home Layout
          menu: {
            className: 'row-span-2',
            // add banner to navigation menu card
            // can be an image or other elements
            banner: <div>Image: Extended Reality (XR)</div>,
          },
        },

        // Artificial Intelligence/Machine Learning
        {
          text: 'Artificial Intelligence and Machine Learning (AI/ML)',
          description: 'Integrate AI/ML libraries and packages',
          url: '/docs',
 
          // (optional) Props for Radix UI Navigation Menu item in Home Layout
          menu: {
            className: 'row-span-2',
            // add banner to navigation menu card
            // can be an image or other elements
            banner: <div>Image: Artificial Intelligence and Machine Learning</div>,
          },
        },

                // 3D and 2D User Interface Design
        {
          text: 'User Interface and Experience Design (UI/UX)',
          description: 'UI/UX Design for 2D and 3D applications',
          url: '/docs',
 
          // (optional) Props for Radix UI Navigation Menu item in Home Layout
          menu: {
            className: 'row-span-2',
            // add banner to navigation menu card
            // can be an image or other elements
            banner: <div>Image: Design</div>,
          },
        },
        
        // Embedded Systems
        {
          text: 'Embedded Systems',
          description: 'Build with Arduino and Raspberry Pi',
          url: '/docs',
 
          // (optional) Props for Radix UI Navigation Menu item in Home Layout
          menu: {
            className: 'row-span-2',
            // add banner to navigation menu card
            // can be an image or other elements
            banner: <div>Image: Embedded Systems</div>,
          },
        },
      ],
    },
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};

