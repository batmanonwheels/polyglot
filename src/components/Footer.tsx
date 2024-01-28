/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import learn from '../../public/images/Learn.svg'
import review from '../../public/images/Review.svg'
import activity from '../../public/images/Activity.svg'
import explore from '../../public/images/Explore.svg'
import logo from '../../public/images/Logo.svg';
import input from '../../public/images/Input.svg';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const pathname = usePathname();
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

  return (
    <footer className="">
	    <div className="hidden md:flex h-72 items-center w-full">
	    	<div className="h-3/5 w-full px-5 flex gap-4 justify-between">
						<div className="flex flex-col h-full gap-4 justify-between">
							<img src={logo.src} alt="Polyglot logo" className="w-auto h-10"/>
							<Link href={''} >About Polyglot</Link>
							<Link href={''} >Join Our Team</Link>
							<Link href={''} >Latest updates</Link>
						</div>
						<div className="flex flex-col h-full gap-4 justify-between">
							<h3  className="font-bold text-2xl w-auto h-10">Course Features</h3>
							<Link href={''} >Fast Learning</Link>
							<Link href={''} >Course Variety</Link>
							<Link href={''} >Latest Courses</Link>
						</div>
						<div className="flex flex-col h-full gap-4 justify-between">
							<h3  className="font-bold text-2xl w-auto h-10">Follow Us</h3>
							<a href={''} >Twitter</a>
							<a href={''} >Instagram</a>
							<a href={''} >Polyglot Community</a>
						</div>
						<div className="flex flex-col h-full gap-4 justify-between">
						<div className="flex flex-col gap-1">
							<h3  className="font-bold text-2xl w-auto h-8">Newsletter Subscription</h3>
							<p>Receive tips and updates from Polyglot.</p>
						</div>
						<img src={input.src} alt="Input with button" className="w-full h-14"/>
						<div className="flex text-xs gap-3">	<Link href={''} >Terms of Service</Link><Link href={''} >Privacy Policy</Link></div>
						</div>
		    </div>
	    </div>
    <div className="flex h-16 w-full items-center justify-evenly gap-2 p-2 shadow-2xl shadow-zinc-500 md:hidden">
      {buttons.map(({ link, icon, title }, i) => (
        <Link
          href={link}
          className={`flex h-14 w-14 flex-col items-center rounded-xl p-2 ${
            pathname === link ? "border border-[#999999] bg-[#F8F6F8] " : "bg"
          }`}
          key={i}
        >
          <img src={icon} alt="Learn icon" className="h-3/5 w-3/5 " />
          <p className="text-xs font-bold">{title}</p>
        </Link>
      ))}
      </div>
    </footer>
  );
};

export default Footer;
