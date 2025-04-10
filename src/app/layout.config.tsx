import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
// import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import {
  AlbumIcon,
  // Book,
  // ComponentIcon,
  Heart,
  // Layout,
  // LayoutTemplate,
  Pencil,
  // Server,
} from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/glowyinternational',
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
        Milky Way
      </>
    ),
  },
  links: [
    {
      icon: <Heart />,
      text: 'Mission',
      url: '/mission',
      active: 'nested-url',
    },
    // Navigation Menu: https://fumadocs.vercel.app/docs/ui/navigation 
    {
      icon: <Pencil />,
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
      icon: <AlbumIcon />,
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};







// export const linkItems: LinkItemType[] = [
//   {
//     icon: <AlbumIcon />,
//     text: 'Blog',
//     url: '/blog',
//     active: 'nested-url',
//   },
//   {
//     text: 'Showcase',
//     url: '/showcase',
//     icon: <LayoutTemplate />,
//     active: 'url',
//   },
//   {
//     text: 'Sponsors',
//     url: '/sponsors',
//     icon: <Heart />,
//   },
//   {
//     type: 'icon',
//     url: 'https://github.com/fuma-nama/fumadocs',
//     text: 'Github',
//     icon: (
//       <svg role="img" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//       </svg>
//     ),
//     external: true,
//   },
// ];

// export const baseOptions: BaseLayoutProps = {
//   nav: {
//     title: (
//       <>
//         {/* {logo} */}
//         <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
//           Fumadocs
//         </span>
//       </>
//     ),
//     transparentMode: 'top',
//   },
//   links: [
//     {
//       type: 'menu',
//       text: 'Documentation',
//       url: '/docs/ui',
//       items: [
//         {
//           menu: {
//             banner: (
//               <div className="-mx-3 -mt-3">
//                 {/* <Image
//                   // src={Preview}
//                   alt="Perview"
//                   className="rounded-t-lg object-cover"
//                   style={{
//                     maskImage:
//                       'linear-gradient(to bottom,white 60%,transparent)',
//                   }}
//                 /> */}
//               </div>
//             ),
//             className: 'md:row-span-2',
//           },
//           icon: <Book />,
//           text: 'Getting Started',
//           description: 'Learn to use Fumadocs on your docs site.',
//           url: '/docs/ui',
//         },
//         {
//           icon: <ComponentIcon />,
//           text: 'Components',
//           description: 'Add interactive experience to your docs.',
//           url: '/docs/ui/components',
//           menu: {
//             className: 'lg:col-start-2',
//           },
//         },
//         {
//           icon: <Server />,
//           text: 'OpenAPI',
//           description:
//             'Generate interactive playgrounds and docs for your OpenAPI schema.',
//           url: '/docs/ui/openapi',
//           menu: {
//             className: 'lg:col-start-2',
//           },
//         },
//         {
//           icon: <Pencil />,
//           text: 'Markdown',
//           description: 'Learn the writing format/syntax of Fumadocs.',
//           url: '/docs/ui/markdown',
//           menu: {
//             className: 'lg:col-start-3 lg:row-start-1',
//           },
//         },
//         {
//           icon: <Layout />,
//           text: 'Layouts',
//           description: 'See the available layouts of Fumadocs UI.',
//           url: '/docs/ui/blocks',
//           menu: {
//             className: 'lg:col-start-3',
//           },
//         },
//       ],
//     },
//     ...linkItems,
//   ],
// };