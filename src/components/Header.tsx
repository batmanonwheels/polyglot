/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import activity from '../../public/images/Activity.svg';
import explore from '../../public/images/Explore.svg';
import learn from '../../public/images/Learn.svg';
import logo from '../../public/images/Logo.svg';
import review from '../../public/images/Review.svg';


interface HeaderProps {
  text: string;
  profile?: boolean;
}

const Header = ({ text, profile }: HeaderProps) => {
  const router = useRouter();

  const toggleCourseSelector = () => {
    const dropdown = document.querySelector("#course-selector");

    if (!dropdown) return;

    dropdown.classList.toggle("hidden");
  };

  const buttons = [
    {
      title: "Learn",
      link: "/",
      icon: learn.src,
    },
    {
      title: "Review",
      link: "/review",
      icon: review.src,
    },
    {
      title: "Activity",
      link: "/activity",
      icon: activity.src,
    },
    {
      title: "Explore",
      link: "/explore",
      icon: explore.src,
    },
  ];


  if (profile) {
    return (
      <header className="z-20 flex h-16 w-full items-center justify-between p-5 ">
      <div className='hidden md:flex justify-between gap-4'>
	    {buttons.map(({ link, icon, title }, i) => (
	      <Link
	        href={link}
	        className={`flex h-14 w-auto items-center justify-between gap-1 rounded-xl p-2`}
	        key={i}
	      >
	        <img src={icon} alt="Learn icon" className="h-1/2" />
	        <p className="text-xs font-bold">{title}</p>
	      </Link>
	    ))}
	    </div>
	    <img src={logo.src} alt="Polyglot logo" className="hidden md:block w-auto"/>
	    <div className="hidden md:flex justify-end gap-2 items-center text-xs font-semibold">
					<Link href={''}><p>About Polyglot</p></Link>
	      <button className="flex h-12 items-center justify-between gap-1 rounded-xl p-2" onClick={() => toggleCourseSelector()}>
	        <img
	          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
	          alt="Current language course"
	          className="h-full aspect-square rounded-full"
	        />
					<p>Your courses</p>
	      </button>
	      <Link href="/profile" className="flex h-12 items-center justify-between gap-1 rounded-xl p-2">
	        <img
	          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
	          alt="profile picture"
	          className="h-full aspect-square rounded-full"
	        />
					<p>Profile</p>
	      </Link>
	    </div>
        <button onClick={() => router.back()} className="md:hidden">
          <svg
            width="30"
            height="26"
            viewBox="0 0 33 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M15.1163 28L2 15L15.1163 2M3.82171 15H30.4186"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h1 className="w-4/6 font-sans text-3xl font-bold md:hidden">{text}</h1>
        <Link href={"/settings"} className="md:hidden">
          <svg
            height="40"
            width="40"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M424.5,216.5h-15.2c-12.4,0-22.8-10.7-22.8-23.4c0-6.4,2.7-12.2,7.5-16.5l9.8-9.6c9.7-9.6,9.7-25.3,0-34.9l-22.3-22.1  c-4.4-4.4-10.9-7-17.5-7c-6.6,0-13,2.6-17.5,7l-9.4,9.4c-4.5,5-10.5,7.7-17,7.7c-12.8,0-23.5-10.4-23.5-22.7V89.1  c0-13.5-10.9-25.1-24.5-25.1h-30.4c-13.6,0-24.4,11.5-24.4,25.1v15.2c0,12.3-10.7,22.7-23.5,22.7c-6.4,0-12.3-2.7-16.6-7.4l-9.7-9.6  c-4.4-4.5-10.9-7-17.5-7s-13,2.6-17.5,7L110,132c-9.6,9.6-9.6,25.3,0,34.8l9.4,9.4c5,4.5,7.8,10.5,7.8,16.9  c0,12.8-10.4,23.4-22.8,23.4H89.2c-13.7,0-25.2,10.7-25.2,24.3V256v15.2c0,13.5,11.5,24.3,25.2,24.3h15.2  c12.4,0,22.8,10.7,22.8,23.4c0,6.4-2.8,12.4-7.8,16.9l-9.4,9.3c-9.6,9.6-9.6,25.3,0,34.8l22.3,22.2c4.4,4.5,10.9,7,17.5,7  c6.6,0,13-2.6,17.5-7l9.7-9.6c4.2-4.7,10.2-7.4,16.6-7.4c12.8,0,23.5,10.4,23.5,22.7v15.2c0,13.5,10.8,25.1,24.5,25.1h30.4  c13.6,0,24.4-11.5,24.4-25.1v-15.2c0-12.3,10.7-22.7,23.5-22.7c6.4,0,12.4,2.8,17,7.7l9.4,9.4c4.5,4.4,10.9,7,17.5,7  c6.6,0,13-2.6,17.5-7l22.3-22.2c9.6-9.6,9.6-25.3,0-34.9l-9.8-9.6c-4.8-4.3-7.5-10.2-7.5-16.5c0-12.8,10.4-23.4,22.8-23.4h15.2  c13.6,0,23.3-10.7,23.3-24.3V256v-15.2C447.8,227.2,438.1,216.5,424.5,216.5z M336.8,256L336.8,256c0,44.1-35.7,80-80,80  c-44.3,0-80-35.9-80-80l0,0l0,0c0-44.1,35.7-80,80-80C301.1,176,336.8,211.9,336.8,256L336.8,256z" />
          </svg>
        </Link>
      </header>
    );
  }

  return (
    <header className="z-20 flex h-16 w-full items-center justify-between px-5 py-4 md:mx-auto md:h-20">
	    <div className='hidden md:flex justify-between gap-4'>
	    {buttons.map(({ link, icon, title }, i) => (
	      <Link
	        href={link}
	        className={`flex h-14 w-auto items-center justify-between gap-1 rounded-xl p-2`}
	        key={i}
	      >
	        <img src={icon} alt="Learn icon" className="h-1/2" />
	        <p className="text-xs font-bold">{title}</p>
	      </Link>
	    ))}
	    </div>
	    <img src={logo.src} alt="Polyglot logo" className="hidden md:block w-auto"/>
	    <div className="hidden md:flex justify-end gap-2 items-center text-xs font-semibold">
					<Link href={''}><p>About Polyglot</p></Link>
	      <button className="flex h-12 items-center justify-between gap-1 rounded-xl p-2" onClick={() => toggleCourseSelector()}>
	        <img
	          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
	          alt="Current language course"
	          className="h-full aspect-square rounded-full"
	        />
					<p>Your courses</p>
	      </button>
	      <Link href="/profile" className="flex h-12 items-center justify-between gap-1 rounded-xl p-2">
	        <img
	          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
	          alt="profile picture"
	          className="h-full aspect-square rounded-full"
	        />
					<p>Profile</p>
	      </Link>
	    </div>
      <h1 className="w-4/6 font-sans text-3xl font-bold md:hidden">{text}</h1>
      <div className="flex w-20 justify-end gap-2 md:hidden">
        <button className="h-8 w-8" onClick={() => toggleCourseSelector()}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
            alt="Current language course"
            className="h-full w-full rounded-full"
          />
        </button>
        <Link href="/profile" className="h-8 w-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
            alt="profile picture"
            className="h-full w-full rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
