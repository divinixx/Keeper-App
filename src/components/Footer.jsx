import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>SummerInternship {year} | Divyanshu Garg </p>
    </footer>
  );
}

export default Footer;
