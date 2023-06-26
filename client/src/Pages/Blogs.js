import React from 'react';
import Navbar from './Navbar';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with Tailwind CSS',
      author: 'John Doe',
      date: 'June 15, 2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dolor mi, non efficitur metus semper nec. Nulla facilisi. Mauris cursus nec diam sit amet lobortis. Sed sed felis ut felis iaculis consequat. Sed aliquam arcu quis luctus lobortis.'
    },
    {
      id: 2,
      title: 'Mastering React Components',
      author: 'Jane Smith',
      date: 'June 18, 2023',
      content:
        'Vestibulum eget orci vel velit consequat tristique. Curabitur et justo in libero volutpat suscipit. Nunc consectetur, mauris id vulputate consectetur, nulla augue commodo ex, et auctor felis justo eget ipsum. Fusce sed congue velit. Ut rutrum ex in sem consectetur, in iaculis metus sagittis. Curabitur consectetur mauris mi, eget tincidunt mi fermentum non.'
    },
    {
      id: 3,
      title: 'Introduction to JavaScript Promises',
      author: 'Adam Johnson',
      date: 'June 20, 2023',
      content:
        'Donec non purus eget odio dictum dignissim. Mauris consectetur dignissim tellus at placerat. Pellentesque mattis risus vitae magna pellentesque sollicitudin. Ut dapibus sollicitudin dolor non tempus. Nam a risus sed elit tempus bibendum sed eu mauris.'
    },
    {
      id: 4,
      title: 'Introduction to JavaScript Promises',
      author: 'Adam Johnson',
      date: 'June 20, 2023',
      content:
        'Donec non purus eget odio dictum dignissim. Mauris consectetur dignissim tellus at placerat. Pellentesque mattis risus vitae magna pellentesque sollicitudin. Ut dapibus sollicitudin dolor non tempus. Nam a risus sed elit tempus bibendum sed eu mauris.'
    },
    {
      id: 5,
      title: 'Introduction to JavaScript Promises',
      author: 'Adam Johnson',
      date: 'June 20, 2023',
      content:
        'Donec non purus eget odio dictum dignissim. Mauris consectetur dignissim tellus at placerat. Pellentesque mattis risus vitae magna pellentesque sollicitudin. Ut dapibus sollicitudin dolor non tempus. Nam a risus sed elit tempus bibendum sed eu mauris.'
    },
    {
      id: 6,
      title: 'Introduction to JavaScript Promises',
      author: 'Adam Johnson',
      date: 'June 20, 2023',
      content:
        'Donec non purus eget odio dictum dignissim. Mauris consectetur dignissim tellus at placerat. Pellentesque mattis risus vitae magna pellentesque sollicitudin. Ut dapibus sollicitudin dolor non tempus. Nam a risus sed elit tempus bibendum sed eu mauris.'
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6 font">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="bg-white rounded shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              By {blog.author} | {blog.date}
            </p>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blogs;
