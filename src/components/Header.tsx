"use client"
import Image from "next/image";
import { Separator } from "./ui/separator";
import Text3D from "./Text3D";
import { cn } from "@/lib/utils";
import {motion} from "framer-motion";
import Link from "next/link";
import VapiAssistant from "@/components/VapiAssistant";


const Header = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div className="space-y-4">
			<div className="flex gap-4 items-center w-full justify-between">
				<div className="flex items-center gap-4">
					<Image
						src={"/rewrite.gif"}
						alt="Mohit Kumar"
						width={64}
						priority
						height={64}
						className="rounded-full object-cover"
					/>
					<div className="relative">
						<div className="block md:hidden">
							<h1 className="text-xl leading-normal font-semibold">
								Mohit Kumar
							</h1>
							<p className="text-muted-foreground text-lg leading-none font-medium">
								Software Developer
								{/* <br />
								<span className="text-sm font-medium">(Front-end Developer)</span> */}
							</p>
						</div>
						<div className="hidden md:block ">
							<Text3D
								clickToggle
								bgColors={["bg-background", "bg-background"]}
								textColors={["text-foreground", "text-muted-background"]}
								containerClassName="rounded-none border-none"
								text={
									<div>
										<h1 className="text-2xl leading-normal font-semibold ">
											Mohit Kumar
										</h1>
										<p className="text-muted-foreground text-lg leading-none font-medium">
										    Software Developer
											{/* <br />
											<span className="text-base font-medium">
											(Front-end Developer)
											</span> */}
										</p>
									</div>
								}
								secondaryText={
									<div>
										<h1 className="text-2xl leading-normal font-semibold">
											Mohit Kumar
										</h1>
										<p className="text-muted-foreground text-lg leading-none font-medium">
											Problem Solver
											<br />
											<span className="text-base font-medium">
												Humble Guy ❤️
											</span>
										</p>
									</div>
								}
							/>
						</div>
						<HoverMe className="dark:invert hidden md:block absolute h-36 w-full object-cover -top-8 end-0 -mr-32 opacity-80" />
					</div>
				</div>
				<div className="select-none">{children}
				</div>
				<div className="relative hidden md:block cursor-pointer">
					<VapiAssistant/>
				<motion.button
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                >
				<Link href="https://drive.google.com/file/d/1ojHd_G2kW3VVFasU0KUpYFl23Ww1swmw/view" target="_blank">
				<div className="absolute hidden md:block mt-2 items-center justify-between bg-gray-200 rounded-xl p-2 tracking-wide text-muted-foreground dark:bg-transparent dark:bg-clip-text hover-effect cursor-pointer hover:text-black  dark:text-[#a64dff]">
                Hiring? Check out My CV.
                </div>		
				</Link>	
				</motion.button>
				</div>
				</div>
			<Separator />
		</div>
	);
};

export default Header;

const HoverMe = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			// xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 1422 800"
			className={cn(className)}
			// style="overflow: hidden; display: block"
			width="1422"
			height="800"
		>
			<defs>
				<linearGradient
					id="dddraw-gradient"
					x1="711"
					y1="-400"
					x2="711"
					y2="800"
					spreadMethod="pad"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset="0%"
						stopColor="hsl(1.4, 60%, 67%)"
						stopOpacity="1"
					></stop>
					<stop
						offset="100%"
						stopColor="hsl(167, 52%, 78%)"
						stopOpacity="1"
					></stop>
				</linearGradient>
			</defs>
			<g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"></g>
			<path
				d="M 718.5014751531739 172.29459665297912 Q 718.5014751531739 172.29459665297912 709.9327528047484 177.36738020194485 701.3640304563228 182.44016375091056 692.8847092147353 186.98502169535863 684.4053879731478 191.52987963980667 671.02782784961 197.37469102277808 657.6502677260722 203.2195024057495 642.4692345178978 209.3850501474094 627.2882013097233 215.55059788906928 613.1118360681908 220.70737053002935 598.9354708266584 225.86414317098942 588.3754807761732 229.6692422610969 577.815490725688 233.4743413512044 569.1862660560762 233.58061878664398 560.5570413864642 233.68689622208353 560.5553184995688 233.68220243249027 560.5535956126735 233.677508642897 560.5518727257781 233.67281485330375 560.5501498388827 233.6681210637105 567.2315781265872 228.15452082558414 573.9130064142917 222.64092058745777 584.4496557369603 218.84645554833483 594.9863050596288 215.0519905092119 608.9456092082557 209.93213822896786 622.9049133568828 204.81228594872383 637.919298276948 198.65140047976382 652.9336831970132 192.4905150108038 665.8631390802097 186.77016792085774 678.7925949634061 181.0498208309117 687.0438395960709 176.6292583343121 695.2950842287357 172.2086958377125 703.8545071744996 167.12071536385105 712.4139301202636 162.03273488998963 713.0721313977267 161.7430647884811 713.7303326751899 161.45339468697253 714.4387313643151 161.32966519732787 715.1471300534403 161.2059357076832 715.8645539891317 161.255337993654 716.581977924823 161.30474027962475 717.2667303942302 161.5244030780292 717.9514828636374 161.74406587643364 718.5637660210655 162.12122237510764 719.1760491784935 162.49837887378163 719.6802770980646 163.01110871930166 720.1845050176357 163.52383856482172 720.5513719489736 164.14234187447565 720.9182388803114 164.76084518412958 721.1264225001293 165.44917451650005 721.3346061199471 166.13750384887052 721.3720067864799 166.85565347081916 721.4094074530126 167.5738030927678 721.2738514377639 168.28003411452482 721.1382954225153 168.98626513628187 720.8376612474607 169.63953137768067 720.5370270724061 170.29279761907947 720.0887876099249 170.85513121547632 719.6405481474437 171.41746481187317 719.0707550961558 171.85618290822438 718.5009620448678 172.2949010045756 718.5012185990208 172.29474882877736 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 569.2564606062522 180.2860575598975 Q 569.2564606062522 180.2860575598975 564.8863505872707 187.82565190057676 560.5162405682893 195.365246241256 554.3949968949573 204.43763211189503 548.2737532216254 213.51001798253404 542.4822201324303 221.61683375287728 536.6906870432352 229.72364952322053 527.6158192836924 241.92907154356075 518.5409515241496 254.13449356390097 512.2620788932059 262.7547517337353 505.983206262262 271.3750099035696 504.09879917937064 273.47951381428675 502.21439209647934 275.58401772500383 501.9126633135631 276.26837884809174 501.61093453064683 276.9527399711797 501.1541905451261 277.54500286629036 500.69744655960534 278.13726576140107 500.11223335337854 278.6030080812434 499.5270201471518 279.06875040108565 498.847350339261 279.38090318014747 498.16768053137025 279.6930559592093 497.43305656298423 279.8334768633051 496.6984325945983 279.973897767401 495.9515508452758 279.9344255269872 495.2046690959533 279.8949532865734 494.48893836805706 279.6778820301174 493.7732076401608 279.46081077366136 493.1302262372246 279.07875669278735 492.48724483428833 278.6967026119134 491.95438286566116 278.1718707077526 491.421520897034 277.6470388035918 491.0297483253688 277.0099323310731 490.6379757537037 276.37282585855445 490.4100624192731 275.660473475795 490.1821490848426 274.9481210930356 490.13134132135224 274.2019247539911 490.0805335578618 273.45572841494663 490.20978431491284 272.71905708590225 490.33903507196385 271.9823857568578 499.9868114449797 268.60400326988554 509.6345878179956 265.2256207829133 526.8834278225523 264.2043379152965 544.1322678271091 263.18305504767966 557.585325170053 262.7198554726053 571.0383825129969 262.2566558975309 584.4797131516058 261.91243837474474 597.9210437902146 261.5682208519586 609.5203594733673 264.2243260889685 621.1196751565201 266.8804313259784 621.1198019025736 266.88542971926404 621.1199286486271 266.89042811254967 621.1200553946807 266.8954265058353 621.1201821407342 266.90042489912094 609.6944902726998 270.1403835210244 598.2687984046653 273.3803421429278 584.8925160619052 273.82564914332426 571.5162337191451 274.2709561437207 558.1265273566427 274.8754029826863 544.7368209941402 275.4798498216519 534.1536934939827 276.05231157275097 523.5705659938253 276.62477332385004 512.8925690562628 276.10409863149846 502.21457211870023 275.58342393914694 501.91291177340486 276.2678152316913 501.6112514281094 276.95220652423563 501.1545666711618 277.54451509078353 500.6978819142141 278.1368236573314 500.1127152851453 278.6026244961655 499.52754865607653 279.0684253349996 498.84791006686197 279.3806460794813 498.1682714776474 279.6928668239631 497.4336615550249 279.83336118975353 496.6990516324024 279.973855555544 495.9521659395903 279.93445800350236 495.2052802467782 279.8950604514607 494.489527815335 279.6780607691627 493.7737753838918 279.4610610868647 493.1307557787625 279.07907130604116 492.48773617363315 278.69708152521764 491.9548217244799 278.17230290987777 491.4219072753267 277.6475242945379 491.0300709949733 277.01045700246186 490.6382347146199 276.3733897103859 490.4102501460908 275.6610601225216 490.1822655775616 274.94873053465733 490.13138319469147 274.20253928012016 490.0805008118213 273.456348025583 490.2096779010933 272.7196637751463 490.3388549903653 271.98297952470955 493.3030985357577 267.90382524076074 496.2673420811502 263.8246709568119 502.58435965091786 255.31169331640115 508.9013772206855 246.79871567599045 517.8813263606758 234.7637364042467 526.861275500666 222.72875713250298 532.5242082989746 214.73940213397495 538.1871410972833 206.75004713544692 544.0222177815868 197.9818759719978 549.8572944658904 189.2137048085487 554.1964130235691 181.65730506963808 558.5355315812478 174.1009053307275 558.9834816960697 173.50439891709408 559.4314318108917 172.90789250346063 560.0091222686568 172.43592540515618 560.586812726422 171.96395830685174 561.2606681305823 171.64396127380502 561.9345235347427 171.32396424075827 562.6653793775474 171.1745355155649 563.3962352203523 171.02510679037158 564.1416141258786 171.05493117756072 564.8869930314049 171.08475556474988 565.6035735426422 171.2920996695368 566.3201540538793 171.49944377432377 566.9662884778458 171.87225674759623 567.6124229018122 172.2450697208687 568.1505578754287 172.76168365510358 568.6886928490452 173.27829758933845 569.0875519423608 173.908686858405 569.4864110356765 174.53907612747153 569.7228125394474 175.24660247743287 569.9592140432184 175.95412882739424 570.0194182909383 176.69767079354767 570.0796225386582 177.4412127597011 569.9601304566208 178.17755564803858 569.8406383745835 178.91389853637605 569.5483948482113 179.6002460636305 569.256151321839 180.28659359088496 569.2563059640456 180.28632557539123 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 740.2834475812494 65.75480741224362 Q 740.2834475812494 65.75480741224362 742.3163885339474 71.12516819161117 744.3493294866453 76.49552897097871 749.6727001613872 89.08214668373319 754.996070836129 101.66876439648766 759.6991218235735 111.64579333079229 764.4021728110181 121.6228222650969 765.5956081295245 131.77793443354136 766.789043448031 141.9330466019858 766.7844738408573 141.93507605764637 766.7799042336836 141.93710551330693 766.7753346265099 141.9391349689675 766.7707650193363 141.94116442462806 759.8729976572927 134.36911123490214 752.975230295249 126.7970580451762 748.252046918808 116.74185203927425 743.5288635423668 106.68664603337231 738.0569784231245 93.81682723847219 732.5850933038821 80.94700844357206 730.5537159277226 75.57598943167984 728.522338551563 70.20497041978763 728.3415263393356 69.46896359407953 728.160714127108 68.73295676837142 728.1612997815002 67.97506577318248 728.1618854358924 67.21717477799355 728.3438349186436 66.48144827357352 728.5257844013947 65.74572176915349 728.8785228000186 65.07492021450722 729.2312611986424 64.40411865986096 729.7342873408375 63.837229072861966 730.2373134830325 63.270339485862976 730.8613914657799 62.840309515942835 731.4854694485273 62.4102795460227 732.1943278301475 62.14210255523804 732.9031862117677 61.87392556445339 733.6556261098153 61.78318801210886 734.4080660078631 61.69245045976433 735.1603555801106 61.78442601666548 735.9126451523581 61.876401573566625 736.6210612935201 62.145744616024906 737.3294774346821 62.41508765848319 737.9528469653494 62.84614395621589 738.5762164960169 63.27720025394859 739.0783091497784 63.844916794678404 739.58040180354 64.41263333540822 739.9320359317683 65.08401440711387 740.2836700599967 65.75539547881952 740.283558820623 65.75510144553158 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 746.0263146606459 99.18675814334067 Q 746.0263146606459 99.18675814334067 751.1054679541114 96.57170188201613 756.184621247577 93.9566456206916 761.3724297612655 94.66182924325264 766.5602382749539 95.36701286581369 766.5626576792326 95.37138853524087 766.5650770835114 95.37576420466804 766.5674964877901 95.38013987409522 766.5699158920688 95.3845155435224 764.2438452897752 100.24428890047179 761.9177746874817 105.10406225742119 756.8361719079492 107.7145419496184 751.7545691284166 110.32502164181558 751.0465422967297 110.58682804363627 750.3385154650427 110.84863444545695 749.5884075813781 110.9333855474378 748.8382996977133 111.01813664941864 748.089707067513 110.92090671353048 747.3411144373127 110.82367677764235 746.6375452994166 110.55011681232736 745.9339761615206 110.27655684701237 745.3163219872803 109.8425661703078 744.69866781304 109.40857549360325 744.2028266920827 108.83937766403017 743.7069855711253 108.27017983445707 743.3617758126979 107.59885665661386 743.0165660542706 106.92753347877067 742.8420512657526 106.1931022872956 742.6675364772348 105.45867109582052 742.6738594663345 104.7038170660692 742.6801824554342 103.94896303631789 742.866975729728 103.21755831996614 743.0537690040217 102.4861536036144 743.410176129631 101.8207074771415 743.7665832552404 101.1552613506686 744.2718898332794 100.59444957421098 744.7771964113183 100.03363779775336 745.4020339997294 99.61005477810838 746.0268715881405 99.18647175846341 746.0265931243932 99.18661495090204 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 762.4436029882982 31.01681107758462 Q 762.4436029882982 31.01681107758462 765.4797873177201 38.27955558430254 768.5159716471421 45.54230009102046 775.4279683787688 60.88010666285332 782.3399651103956 76.21791323468618 788.1548753238202 88.56384281038987 793.9697855372448 100.90977238609358 797.9505606200486 109.71148307221551 801.9313357028524 118.51319375833745 800.1853817389662 122.63074654513335 798.4394277750799 126.74829933192926 798.4344966217859 126.74912620990743 798.4295654684919 126.7499530878856 798.4246343151979 126.75077996586377 798.4197031619038 126.75160684384194 794.4593982071318 125.11906015142699 790.4990932523598 123.48651345901206 786.6451014522042 114.78688616752584 782.7911096520487 106.08725887603961 777.0033697686332 93.77455870335132 771.2156298852177 81.46185853066304 764.1376890128365 65.90788915939649 757.0597481404554 50.353919788129936 753.9994788260786 43.10128598369063 750.9392095117018 35.84865217925132 750.7336961601466 35.1252319525657 750.5281828085913 34.40181172588009 750.5017728750322 33.65023000879621 750.4753629414732 32.89864829171233 750.6295913724898 32.16258704894001 750.7838198035063 31.426525806167692 751.1097228354413 30.74876495172056 751.4356258673763 30.071004097273423 751.9142620007012 29.490935123856396 752.3928981340263 28.910866150439368 752.9964490141837 28.462202694041867 753.5999998943411 28.013539237644366 754.2933871158185 27.722357639432577 754.986774337296 27.431176041220787 755.7296982022024 27.31439978936389 756.4726220671089 27.197623537506995 757.22190380551 27.262039673249618 757.971185543911 27.326455808992243 758.683276865966 27.56832046349845 759.3953681880209 27.810185118004654 760.0288823126344 28.21544110619058 760.6623964372479 28.620697094376503 761.180513493732 29.16579091916791 761.6986305502159 29.710884743959316 762.0712375509038 30.364135526648205 762.4438445515918 31.01738630933709 762.443723769945 31.017098693460856 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 829.8459724317631 84.32173657690042 Q 829.8459724317631 84.32173657690042 829.5268876036235 86.89889374424804 829.207802775484 89.47605091159566 821.0468140914693 95.14138909135491 812.8858254074545 100.80672727111417 804.3919278752503 93.91179583056504 795.8980303430461 87.01686439001593 798.2078486223093 76.31197248657026 800.5176669015723 65.60708058312458 811.0068296005998 60.62980490433087 821.4959922996272 55.65252922553715 833.3472674523334 58.76233830752908 845.1985426050396 61.872147389521 849.2850486653372 71.03587265950647 853.3715547256348 80.19959792949194 847.1823742331899 89.2782354607649 840.993193740745 98.35687299203785 834.6137689220477 98.2619006636299 828.2343441033504 98.16692833522195 828.2345228198305 98.16193153020077 828.2347015363106 98.15693472517958 828.2348802527906 98.15193792015839 828.2350589692708 98.14694111513721 829.1687056660371 94.13667460411979 830.1023523628035 90.12640809310237 834.4580085823192 81.6398086885953 838.8136648018349 73.15320928408822 828.5456230824034 71.10802427995338 818.2775813629719 69.06283927581856 817.5111503411073 78.31045513715907 816.7447193192427 87.55807099849956 817.0062582093648 85.20000009654176 817.2677970994869 82.84192919458395 817.4477156519154 82.10011792172135 817.627634204344 81.35830664885874 817.9798569173756 80.68111110067593 818.3320796304074 80.00391555249314 818.8361353034118 79.43069436606842 819.340190976416 78.85747317964369 819.966783869995 78.42154199726474 820.593376763574 77.98561081488577 821.3060892693126 77.71230597735459 822.0188017750511 77.4390011398234 822.7762110086289 77.34420713713848 823.5336202422068 77.24941313445355 824.2917055433818 77.3386393985048 825.0497908445567 77.42786566255606 825.7644922600059 77.69592635868455 826.4791936754551 77.96398705481305 827.1089727253327 78.39530248276502 827.7387517752102 78.82661791071699 828.247005671547 79.3961199975546 828.7552595678839 79.96562208439222 829.1124485703449 80.64021134207053 829.4696375728058 81.31480059974885 829.6550018397853 82.05526986891616 829.8403661067648 82.79573913808346 829.8431322583567 83.55905231002495 829.8458984099487 84.32236548196646 829.845935420856 84.32205102943344 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 853.5826258607148 40.05371021351597 Q 853.5826258607148 40.05371021351597 858.6554298613771 44.99675918893696 863.7282338620395 49.939808164357956 871.1619102522741 57.28495180141205 878.5955866425088 64.63009543846614 887.7483899600647 58.877800891183284 896.9011932776207 53.12550634390043 900.784055940421 44.85919336593955 904.6669186032215 36.59288038797867 908.4789398912727 36.6278993356567 912.290961179324 36.66291828333473 912.2948351424848 36.66607936059242 912.2987091056455 36.669240437850114 912.3025830688061 36.67240151510781 912.3064570319669 36.675562592365495 911.8625069187038 44.56420396656719 911.4185568054407 52.45284534076888 906.7778310709682 62.01302399093623 902.1371053364957 71.57320264110359 894.7775931739709 78.88498343402334 887.418081011446 86.19676422694309 878.6363076034262 79.94769080826663 869.8545341954064 73.69861738959018 862.4125207721522 66.32683852107864 854.970507348898 58.9550596525671 849.8825393769041 54.02765149564861 844.7945714049102 49.100243338730124 844.317155509422 48.508724040969895 843.839739613934 47.91720474320966 843.517761687192 47.22861834225591 843.19578376045 46.540031941302175 843.0479571746845 45.794399111131455 842.900130588919 45.048766280960734 842.9350470322402 44.28942323669597 842.9699634755614 43.53008019243119 843.1855936026429 42.80115998748262 843.4012237297245 42.07223978253404 843.7850351074492 41.416107293461444 844.1688464851738 40.75997480438885 844.6985319782349 40.21476448228538 845.2282174712959 39.66955416018192 845.8729917339494 39.26695365458484 846.5177659966031 38.86435314898775 847.2401547184093 38.627761620198456 847.9625434402153 38.39117009140916 848.7205613547212 38.33433825019709 849.4785792692272 38.27750640898502 850.2281703396266 38.40373732463165 850.977761410026 38.52996824027828 851.6753593680878 38.83192536603531 852.3729573261496 39.13388249179233 852.9780177457749 39.594016065323345 853.5830781654001 40.054149638854355 853.5828520130574 40.05392992618516 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 934.1899767389095 43.87662890067941 Q 934.1899767389095 43.87662890067941 938.6853948814755 43.2919156428092 943.1808130240416 42.70720238493899 951.3627125955652 38.621084323467926 959.5446121670886 34.534966261996864 955.7440374653895 43.52827712731042 951.9434627636904 52.52158799262398 950.8051828000405 64.34549464374507 949.6669028363905 76.16940129486615 959.5339858793918 80.16365213160604 969.401068922393 84.15790296834594 979.3951377854837 81.15490877890005 989.3892066485743 78.15191458945418 989.3927116571952 78.15548038734076 989.3962166658159 78.15904618522735 989.3997216744367 78.16261198311395 989.4032266830576 78.16617778100053 989.9819573790107 82.13917674641176 990.560688074964 86.112175711823 981.8027612924132 91.3629954092211 973.0448345098623 96.61381510661921 960.4503901767497 96.7168109577033 947.8559458436371 96.81980680878739 942.3349177924642 87.02664341655567 936.8138897412915 77.23348002432395 937.1410514924726 67.1644227676905 937.4682132436537 57.095365511057025 942.9074025707725 45.02952141382005 948.3465918978914 32.96367731658307 957.144778564976 30.04878995305235 965.9429652320607 27.13390258952163 964.9354462323654 37.96884269423677 963.9279272326701 48.80378279895191 954.3724102537283 52.036157106496816 944.8168932747866 55.268531414041725 940.3127868812198 55.84504869930811 935.808680487653 56.4215659845745 935.0463471836604 56.42727525614514 934.2840138796678 56.432984527715774 933.5424676386385 56.256083892970146 932.8009213976092 56.07918325822452 932.1232609219131 55.72995419036568 931.4456004462171 55.380725122506846 930.8712113945415 54.879464831367216 930.296822342866 54.37820454022758 929.859088233882 53.754046297479796 929.4213541248978 53.129888054732014 929.1457160855862 52.41910796677054 928.8700780462744 51.70832787880906 928.7725561724308 50.952236517742065 928.6750342985871 50.19614515667507 928.7612965661012 49.43868658793258 928.8475588336154 48.68122801919009 929.1125916754465 47.966425770376446 929.3776245172777 47.2516235215628 929.806024212206 46.62102193296389 930.2344239071342 45.990420344364985 930.8012918447622 45.480670009938876 931.3681597823902 44.97091967551276 932.0405495715487 44.61164730864681 932.7129393607072 44.25237494178086 933.4517716752583 44.06446146931765 934.1906039898095 43.87654799685445 934.1902903643595 43.876588448766924 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 999.2170156167589 85.57885814878925 Q 999.2170156167589 85.57885814878925 997.7596758710955 81.2223050033914 996.3023361254321 76.86575185799353 997.6865850098025 64.16517130817505 999.0708338941729 51.46459075835657 1008.8686954230218 47.08432483617874 1018.6665569518706 42.7040589140009 1029.0459549043628 41.2723587609872 1039.425352856855 39.8406586079735 1044.0373705042598 42.65591621514515 1048.6493881516647 45.47117382231679 1048.649798089552 45.47615698907384 1048.650208027439 45.4811401558309 1048.650617965326 45.48612332258796 1048.6510279032134 45.49110648934501 1044.6192433111082 49.01744245301457 1040.587458719003 52.54377841668413 1031.345720133358 53.766510509396966 1022.1039815477133 54.989242602109805 1015.2058047668046 63.93435067486881 1008.3076279858959 72.87945874762781 1009.7533750322248 77.23213318516147 1011.1991220785536 81.58480762269512 1011.3510391761165 82.3307232380095 1011.5029562736793 83.07663885332387 1011.4719437947599 83.83723541908854 1011.4409313158404 84.59783198485322 1011.2287917071708 85.32890359292946 1011.016652098501 86.05997520100571 1010.6357149241041 86.7190319351829 1010.2547777497074 87.37808866936008 1009.7271830960576 87.92682612128218 1009.1995884424078 88.47556357320425 1008.5560001355643 88.88208909638323 1007.9124118287207 89.2886146195622 1007.1902352513158 89.52930093149035 1006.468058673911 89.76998724341851 1005.709266762555 89.83084564433801 1004.950474851199 89.8917040452575 1004.1991686274316 89.76919744204747 1003.4478624036642 89.64669083883743 1002.7477078205106 89.34793932103238 1002.0475532373571 89.04918780322734 1001.4392433120869 88.5915548230789 1000.8309333868167 88.13392184293043 1000.349823120868 87.5440050507466 999.8687128549193 86.95408825856278 999.5427643995538 86.26617364602241 999.2168159441882 85.57825903348204 999.2169157804735 85.57855859113565 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 859.7591537658633 129.6036511358038 Q 859.7591537658633 129.6036511358038 857.8522423460768 137.5824030778851 855.9453309262904 145.56115501996638 852.6963604559428 158.2730762216213 849.4473899855954 170.98499742327618 846.8746994521849 180.71511330189745 844.3020089187745 190.4452291805187 842.4652138732604 196.13011489734464 840.6284188277463 201.81500061417054 840.2098527162484 202.45556584205116 839.7912866047504 203.09613106993174 839.2315819570177 203.61790890404376 838.671877309285 204.13968673815577 838.0035641857414 204.51235142626498 837.3352510621978 204.8850161143742 836.597171852984 205.08690836729812 835.8590926437704 205.28880062022202 835.0941445472047 205.30818645073487 834.329196450639 205.32757228124768 833.5818382860346 205.16332498396918 832.83448012143 204.99907768669067 832.1481483804282 204.66074332225577 831.4618166394264 204.3224089578209 830.8764009550613 203.82965153538714 830.2909852706962 203.3368941129534 829.8405100300488 202.71835271706476 829.3900347894014 202.0998113211761 829.1006816346237 201.39143560682365 828.8113284798459 200.6830598924712 828.6999146298886 199.92602068945598 828.5885007799313 199.1689814864408 828.6615016129888 198.4072779488114 828.7345024460462 197.64557441118203 828.9876751502713 196.92347678433399 829.2408478544963 196.20137915748595 830.7283570227428 186.73892777712518 832.2158661909891 177.27647639676445 834.9879957752115 168.26564240684172 837.7601253594339 159.254808416919 842.7765198002048 149.65291818995013 847.7929142409757 140.05102796298124 855.6954897349547 134.1459381241475 863.5980652289335 128.2408482853138 873.0760041323065 133.66573506687075 882.5539430356794 139.0906218484277 884.3738092093272 151.18132348499984 886.193675382975 163.272025121572 896.0901801061382 155.16572894018077 905.9866848293015 147.05943275878954 915.678613076768 142.44766859181095 925.3705413242344 137.83590442483234 929.474110058163 147.22262101518447 933.5776787920915 156.60933760553658 933.5827600868415 166.15277063377974 933.5878413815914 175.6962036620229 932.9554699634855 185.918108173732 932.3230985453795 196.14001268544112 932.0419793181268 198.5761826862551 931.7608600908741 201.01235268706907 931.5476118003423 201.76908547892492 931.3343635098107 202.52581827078077 930.9462085569726 203.20952514091732 930.5580536041344 203.89323201105384 930.0175515730863 204.46417588405487 929.4770495420381 205.0351197570559 928.8156144362197 205.46011734819695 928.1541793304013 205.885114939338 927.4102537892404 206.13946536865353 926.6663282480794 206.39381579796904 925.8831492589812 206.4627362065566 925.0999702698831 206.53165661514416 924.3230562324917 206.41114134561843 923.5461421951003 206.2906260760927 922.8206473897719 205.98767948158093 922.0951525844437 205.68473288706915 921.4632428033514 205.21696223787822 920.8313330222591 204.7491915886873 920.32973489157 204.1437837369263 919.8281367608809 203.53837588516535 919.4860031875181 202.8305171636236 919.1438696141554 202.12265844208187 918.981085417478 201.353489632914 918.8183012208005 200.58432082374614 918.8443274259677 199.79854605428022 918.8703536311348 199.01277128481428 922.3338694779086 197.82203681547367 925.7973853246824 196.63130234613308 925.802312975088 196.6321498492194 925.8072406254934 196.63299735230572 925.8121682758988 196.63384485539206 925.8170959263043 196.63469235847836 928.7890279658977 198.8232002551146 931.7609600054913 201.01170815175087 931.5477873893049 201.76846226465207 931.3346147731185 202.52521637755328 930.9465281929081 203.2089620597665 930.5584416126976 203.8927077419797 930.0179966787391 204.46370566232903 929.4775517447806 205.03470358267836 928.8161591420285 205.45976731520489 928.1547665392764 205.88483104773144 927.4108664368779 206.1392558683292 926.6669663344794 206.39368068892693 925.883794241338 206.4626794150687 925.1006221481966 206.53167814121042 924.3236960631629 206.41124056369088 923.5467699781291 206.29080298617134 922.8212448817688 205.98792894265472 922.0957197854086 205.68505489913807 921.463763230411 205.217347443264 920.8318066754134 204.74963998738994 920.3301480064472 204.14428229846897 919.8284893374811 203.53892460954802 919.486284979957 202.83110010490287 919.1440806224329 202.1232756002577 918.9812195096886 201.3541230733553 918.8183583969442 200.58497054645292 918.8443060245044 199.79919317829535 918.8702536520645 199.0134158101378 919.0988259241781 197.17304533221397 919.3273981962916 195.33267485429016 919.9553816820039 185.26639384612022 920.5833651677164 175.2001128379503 921.9730188684125 161.97347639085262 923.3626725691088 148.74683994375494 916.3749073220802 155.42760061878982 909.3871420750517 162.10836129382471 902.3534498829717 169.27358839503108 895.3197576908917 176.43881549623745 886.3793266403213 180.28964652200204 877.438895589751 184.14047754776664 875.3112583904167 173.9082002344977 873.1836211910825 163.67592292122876 868.1816866539323 152.44329781281857 863.179752116782 141.2106727044084 858.118354373867 148.90032996925305 853.056956630952 156.5899872340977 848.9285899755098 168.11295255714654 844.8002233200677 179.6359178801954 842.7144613859739 190.72517454387577 840.62869945188 201.81443120755614 840.2101973989977 202.455038288845 839.7916953461153 203.09564537013387 839.2320428789644 203.61747917210167 838.6723904118136 204.13931297406947 838.0041145580802 204.5120444916276 837.3358387043469 204.8847760091857 836.5977796880488 205.08674206902097 835.8597206717509 205.28870812885623 835.0947745175929 205.30817045408168 834.329828363435 205.3276327793071 833.5824537778376 205.16346021866616 832.8350791922403 204.99928765802522 832.1487136212337 204.661021928456 831.4623480502271 204.32275619888676 830.8768830930469 203.83005732048514 830.2914181358668 203.3373584420835 829.8408810433323 202.71886209681156 829.3903439507978 202.1003657515396 829.1009199598955 201.39201897604448 828.8114959689931 200.68367220054932 828.7000064156728 199.92664414270428 828.5885168623523 199.16961608485926 828.6614415246912 198.4079052509551 828.7343661870301 197.64619441705096 828.9874666802267 196.92407147654302 829.2405671734233 196.20194853603508 830.6991656449735 191.66559901900104 832.1577641165237 187.12924950196702 834.7821835351965 177.433208849791 837.4066029538693 167.73716819761495 840.6029467132523 155.21372253883646 843.7992904726354 142.690276880058 845.6663696229173 134.70211108990054 847.5334487731992 126.71394529974309 847.7951619553533 126.0034655239244 848.0568751375074 125.29298574810574 848.4810171743671 124.66578654998042 848.9051592112269 124.0385873518551 849.4670789476818 123.53112157828701 850.0289986841367 123.02365580471891 850.6960373187022 122.665417390311 851.3630759532678 122.30717897590308 852.0964651691625 122.1189887541325 852.829854385057 121.93079853236192 853.5869695665948 121.92359412776005 854.3440847481326 121.91638972315818 855.0809223253896 122.09058985605898 855.8177599026465 122.26478998895978 856.4914948410124 122.6102701394543 857.1652297793783 122.95575028994882 857.7367045725798 123.452431135458 858.3081793657815 123.94911198096719 858.7441798719874 124.56812640741359 859.1801803781933 125.18714083386 859.4553662274974 125.89251169369429 859.7305520768015 126.59788255352858 859.8289294547126 127.34861365923547 859.9273068326238 128.09934476494237 859.8431580413156 128.85180358938527 859.7590092500075 129.60426241382814 859.7590815079354 129.60395677481597 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 953.7846542030549 138.68567561536733 Q 953.7846542030549 138.68567561536733 958.7164957705761 137.66751923768325 963.6483373380972 136.64936285999917 973.0765863323086 132.2483853735 982.50483532652 127.84740788700087 974.981041343387 137.21421869362038 967.457247360254 146.5810295002399 960.4205502615495 156.9725743238156 953.383853162845 167.3641191473913 950.6297582659004 177.69853540972747 947.8756633689559 188.03295167206363 953.0112681849314 195.85715730761706 958.1468730009068 203.68136294317048 968.6985766126445 200.0933462025638 979.2502802243821 196.5053294619571 988.9538750562333 187.72005399794637 998.6574698880844 178.9347785339356 998.6617774740939 178.93731717585004 998.6660850601036 178.93985581776448 998.6703926461132 178.94239445967892 998.6747002321227 178.94493310159336 999.6489816293074 183.60438227017178 1000.6232630264922 188.2638314387502 994.1627946529229 197.1760734642025 987.7023262793537 206.08831548965475 975.0612870402565 211.2581012660745 962.4202478011593 216.42788704249426 952.6081970915504 212.36651185474346 942.7961463819415 208.30513666699264 939.0722402489863 197.38946082206706 935.3483341160311 186.47378497714146 938.974794785009 173.5866524752747 942.6012554539869 160.69951997340792 950.5556299511699 149.08152036946598 958.5100044483528 137.46352076552407 968.4827936354175 129.23842624750958 978.4555828224821 121.01333172949509 988.0774349001274 122.35222654415864 997.6992869777725 123.69112135882217 990.5789134923803 132.98256190002337 983.458540006988 142.27400244122455 974.8345214089082 145.65533642269276 966.2105028108285 149.03667040416096 961.2718842648244 150.0506652410765 956.3332657188201 151.06466007799204 955.5741057047544 151.12721210639685 954.8149456906885 151.18976413480166 954.0628767370487 151.06881384672863 953.3108077834088 150.94786355865557 952.6095401731161 150.6504405905303 951.9082725628235 150.35301762240508 951.2985640023373 149.89640821110942 950.6888554418512 149.43979879981376 950.2061422213538 148.8505411057859 949.7234290008565 148.26128341175803 949.3957664354036 147.573625119861 949.0681038699506 146.88596682796395 948.9145357232413 146.13987467043233 948.760967576532 145.39378251290069 948.7904192364686 144.63261940098516 948.8198708964051 143.8714562890696 949.030630631128 143.13946105859782 949.241390365851 142.40746582812605 949.6212088096759 141.7471820762857 950.0010272535008 141.08689832444531 950.5278293406267 140.5367017739166 951.0546314277526 139.9865052233879 951.6977993961242 139.57837332353847 952.3409673644958 139.17024142368905 953.0631202615721 138.92789481971414 953.7852731586485 138.6855482157392 953.7849636808517 138.68561191555327 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 1090.5409789298033 30.726253099633535 Q 1090.5409789298033 30.726253099633535 1089.9643660935944 36.38783844256224 1089.3877532573858 42.04942378549095 1087.004315098559 56.322800969784396 1084.6208769397317 70.59617815407785 1081.8492731713973 86.30701662048908 1079.0776694030626 102.01785508690031 1077.3778076365652 113.80445009448832 1075.677945870068 125.59104510207631 1071.377576171526 133.48038247811354 1067.0772064729842 141.36971985415076 1067.0722607800285 141.36898492477536 1067.0673150870725 141.3682499954 1067.0623693941166 141.36751506602462 1067.0574237011608 141.36678013664923 1065.2318429720876 132.6020732148548 1063.4062622430147 123.83736629306038 1065.1494366619745 111.92325315010359 1066.8926110809346 100.00914000714678 1069.6318575632858 84.20215501430835 1072.371104045637 68.39517002146991 1074.662613077231 54.5843261495294 1076.954122108825 40.77348227758889 1077.5387249098235 35.11307305455385 1078.1233277108217 29.45266383151881 1078.2897418633281 28.718958666276883 1078.4561560158345 27.985253501034958 1078.7933267880503 27.312696581495423 1079.1304975602661 26.640139661955885 1079.6188285710682 26.06782002788233 1080.1071595818703 25.495500393808776 1080.7182690099667 25.05668128922388 1081.3293784380633 24.617862184638984 1082.0277485747802 24.33804779651905 1082.7261187114973 24.05823340839911 1083.471160251676 23.953686562128688 1084.216201791855 23.84913971585826 1084.9646128861746 23.9259366790547 1085.7130239804944 24.002733642251137 1086.4213069409893 24.256410971805174 1087.1295899014842 24.510088301359207 1087.756579289212 24.925902258958175 1088.3835686769394 25.341716216557145 1088.892823839226 25.895499675448466 1089.4020790015124 26.449283134339787 1089.7640020043987 27.10885017387329 1090.1259250072846 27.768417213406792 1090.3194808688377 28.495433766255164 1090.513036730391 29.222450319103537 1090.5269759748435 29.974662149056506 1090.5409152192958 30.726873979009472 1090.5409470745494 30.726563539321504 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
			<path
				d="M 1052.4411748673413 193.12744567919458 Q 1052.4411748673413 193.12744567919458 1052.8683504735868 189.6424540567901 1053.2955260798321 186.15746243438562 1060.0380716631144 179.10276502768264 1066.7806172463968 172.04806762097965 1066.655114561338 182.28695470812784 1066.5296118762794 192.525841795276 1061.4327030991876 189.31510860030818 1056.3357943220958 186.10437540534033 1056.3395223077564 186.10104342050911 1056.3432502934168 186.0977114356779 1056.3469782790771 186.09437945084667 1056.3507062647377 186.09104746601545 1061.098949223312 186.90926231867135 1065.8471921818864 187.72747717132725 1065.4034481103977 191.20986682028507 1064.9597040389087 194.69225646924292 1064.7751329957232 195.42988151533513 1064.5905619525377 196.1675065614273 1064.234823811146 196.83952408602346 1063.8790856697544 197.51154161061962 1063.3728559476488 198.07889392361562 1062.866626225543 198.6462462366116 1062.2393270179573 199.0759587949192 1061.6120278103713 199.50567135322677 1060.9001177767236 199.77276924276714 1060.188207743076 200.03986713230748 1059.433063127971 200.12882661119102 1058.6779185128662 200.21778609007453 1057.9234283568144 200.12343682920874 1057.1689382007626 200.02908756834296 1056.458953507083 199.75691315120238 1055.7489688134033 199.4847387340618 1055.124753925851 199.0505579505587 1054.500539038299 198.6163771670556 1053.9983733554673 198.04542462472705 1053.4962076726358 197.47447208239853 1053.1452770876053 196.7999315698308 1052.7943465025746 196.12539105726304 1052.615047117435 195.3864669007397 1052.4357477322958 194.64754274421634 1052.4385004357364 193.88718125043272 1052.441253139177 193.12681975664907 1052.4412140032591 193.12713271792182 Z"
				fill="hsl(0, 0%, 0%)"
			></path>
		</svg>
	);
};
