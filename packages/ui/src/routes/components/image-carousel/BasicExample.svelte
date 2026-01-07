<script lang="ts">
  import { ImageCarousel, type CarouselImageItem } from '@immich/ui';

  const items: CarouselImageItem[] = [
    {
      title: '1 year ago',
      href: '#',
      src: 'https://picsum.photos/id/1011/800/600',
      alt: 'Sample image',
    },
    {
      title: '2 years ago',
      href: '#',
      src: 'https://picsum.photos/id/1012/800/600',
      alt: 'Sample image',
    },
    {
      title: '3 years ago',
      href: '#',
      src: 'https://picsum.photos/id/1013/800/600',
      alt: 'Sample image',
    },
    {
      title: '4 years ago',
      href: '#',
      src: 'https://picsum.photos/id/1015/800/600',
      alt: 'Sample image',
    },
    {
      title: '5 years ago',
      href: '#',
      src: 'https://picsum.photos/id/1016/800/600',
      alt: 'Sample image',
    },
    {
      title: '6 years ago',
      href: '#',
      src: 'https://picsum.photos/id/1018/800/600',
      alt: 'Sample image',
    },
    {
      title: '7 years ago',
      href: '#',
      src: 'https://picsum.photos/id/1020/800/600',
      alt: 'Sample image',
    },
    {
      title: '8 years ago',
      href: '#',
      src: 'https://picsum.photos/id/1024/800/600',
      alt: 'Sample image',
    },
  ];
</script>

<ImageCarousel {items} />
