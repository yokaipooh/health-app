const Footer = () => {
  const footerItems = [
    { label: '会員登録' },
    { label: '運営会社' },
    { label: '利用規約' },
    { label: '個人情報の取扱について' },
    { label: '特定商取引法に基づく表記' },
    { label: 'お問い合わせ' },
  ];
  return (
    <footer className="h-32 px-40 py-14 bg-dark-500 text-light">
      <div className="max-w-[1280px] mx-auto flex items-center flex-wrap gap-12 font-jp font-light leading-4 text-xs">
        {footerItems.map((item, index) => (
          <p key={index}>{item.label}</p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;