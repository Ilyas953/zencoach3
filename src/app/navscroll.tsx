
export default function navscroll() {

const handleScroll = () => {
  const section = document.getElementById("contact");
  section?.scrollIntoView({ behavior: "smooth" });
};

<button onClick={handleScroll} className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg">
  Aller à Contact
</button>
}