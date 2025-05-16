export type Blog = {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  date: string;
};

export const blogs: Blog[] = [
  {
    id: '1',
    title: {
      en: 'Getting Started with Next.js',
      ar: 'البدء مع Next.js'
    },
    excerpt: {
      en: 'Learn how to build modern web applications with Next.js',
      ar: 'تعلم كيفية بناء تطبيقات الويب الحديثة باستخدام Next.js'
    },
    content: {
      en: 'Next.js is a powerful React framework that enables server-side rendering and static site generation...',
      ar: 'Next.js هو إطار عمل React قوي يتيح التقديم من جانب الخادم وإنشاء المواقع الثابتة...'
    },
    date: '2024-03-20'
  },
  {
    id: '2',
    title: {
      en: 'The Future of Web Development',
      ar: 'مستقبل تطوير الويب'
    },
    excerpt: {
      en: 'Exploring upcoming trends in web development',
      ar: 'استكشاف الاتجاهات القادمة في تطوير الويب'
    },
    content: {
      en: 'Web development is constantly evolving with new technologies and frameworks...',
      ar: 'تطوير الويب يتطور باستمرار مع التقنيات وأطر العمل الجديدة...'
    },
    date: '2024-03-19'
  },
  {
    id: '3',
    title: {
      en: 'TypeScript Best Practices',
      ar: 'أفضل ممارسات TypeScript'
    },
    excerpt: {
      en: 'Essential TypeScript patterns for better code quality',
      ar: 'أنماط TypeScript الأساسية لجودة أفضل للكود'
    },
    content: {
      en: 'TypeScript adds static typing to JavaScript, making your code more maintainable...',
      ar: 'يضيف TypeScript الكتابة الثابتة إلى JavaScript، مما يجعل الكود أكثر قابلية للصيانة...'
    },
    date: '2024-03-18'
  },
  {
    id: '4',
    title: {
      en: 'Building Responsive UIs',
      ar: 'بناء واجهات المستخدم المتجاوبة'
    },
    excerpt: {
      en: 'Create beautiful responsive interfaces with modern CSS',
      ar: 'إنشاء واجهات متجاوبة جميلة باستخدام CSS الحديث'
    },
    content: {
      en: 'Responsive design is crucial for modern web applications...',
      ar: 'التصميم المتجاوب أمر بالغ الأهمية لتطبيقات الويب الحديثة...'
    },
    date: '2024-03-17'
  },
  {
    id: '5',
    title: {
      en: 'Performance Optimization Tips',
      ar: 'نصائح لتحسين الأداء'
    },
    excerpt: {
      en: 'Learn how to make your web applications faster',
      ar: 'تعلم كيفية جعل تطبيقات الويب أسرع'
    },
    content: {
      en: 'Performance optimization is key to providing a great user experience...',
      ar: 'تحسين الأداء هو مفتاح تقديم تجربة مستخدم رائعة...'
    },
    date: '2024-03-16'
  }
]; 