import type { Post } from '../../payload-types'

export const post3: Partial<Post> = {
  slug: 'post-3',
  _status: 'published',
  authors: ['{{AUTHOR}}'],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: "In the dynamic landscape of website development and content management, a robust CMS (Content Management System) is the cornerstone of a successful digital presence. While several CMS platforms vie for attention, PayloadCMS emerges as a versatile and powerful tool, offering a plethora of features and functionalities that empower developers and content creators alike. Let's delve into the transformative potential of PayloadCMS and how it's reshaping the way we manage and deliver digital content.",
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'block',
          fields: {
            id: '6643854cf1b6f340d1c1f367',
            blockName: '',
            blockType: 'banner',
            content: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'The Payload config is where you configure everything that Payload does.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
          format: '',
          version: 2,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Streamlined Content Management',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'PayloadCMS prioritizes simplicity without compromising on functionality. Its intuitive interface allows users to effortlessly manage content, from creating and editing pages to organizing media assets. With a user-friendly dashboard, content updates become swift and seamless, enabling teams to focus on crafting engaging content rather than grappling with complex technicalities.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Flexibility and Customization',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h3',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: "One of PayloadCMS's standout features is its flexibility and extensibility. Tailored to suit diverse project requirements, it offers customizable schemas that empower developers to define content structures tailored to specific needs. Whether it's a blog, e-commerce site, or a portfolio showcase, PayloadCMS adapts effortlessly, providing a solid foundation for building dynamic, content-rich websites.",
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Simple Collection Example',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h3',
          version: 1,
        },
        {
          type: 'block',
          fields: {
            id: '664397d9e0ef87fa1fec2fc0',
            blockName: '',
            blockType: 'code',
            code: "import { CollectionConfig } from 'payload/types'\n\nexport const Orders: CollectionConfig = {\n  slug: 'orders',\n  fields: [\n    {\n      name: 'total',\n      type: 'number',\n      required: true,\n    },\n    {\n      name: 'placedBy',\n      type: 'relationship',\n      relationTo: 'customers',\n      required: true,\n    },\n  ],\n}",
            language: 'typescript',
          },
          format: '',
          version: 2,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Conclusion',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: "In an era where content is king, a powerful CMS is the linchpin of digital success. PayloadCMS stands out as a formidable contender, offering a potent blend of simplicity, flexibility, and performance. By empowering developers and content creators with intuitive tools and robust features, PayloadCMS is redefining the landscape of content management, enabling organizations to create immersive digital experiences that captivate audiences and drive growth. Whether you're a developer seeking efficiency or a content creator craving creativity, PayloadCMS unlocks a world of possibilities, revolutionizing the way we manage and deliver digital content.",
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  meta: {
    description: 'This is the third post.',
    image: '{{IMAGE}}',
    title: 'Post 3',
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Post 3',
}
