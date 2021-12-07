﻿export class Youtube_Template {
    //#endregion
    //#region template
    /**
     * Templates youtube template
     * @param teamName
     * @param playerName
     * @returns template
     */
    static template(teamName, playerName) {
        return '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 2560 1440">\n' +
            '  <defs/>\n' +
            '  <path fill="#e3e5e8" d="M0 0h2560.1664v1440.0576H0z"/>\n' +
            '  <g fill="#2e4263">\n' +
            '    <path d="M998.81381122 785.13450676c-.00103811 0-.00207622 0-.00415244-.00103811-.58237971-.207622-1.33189513-.45053974-2.22259351-.68930504-2.80497322-.75366786-5.70026201-1.13569234-8.60697001-1.13569234-4.72547672 0-9.2703223 1.02253835-13.50892543 3.04062419-2.66690459 1.04330055-5.07012924 2.58697012-7.14427302 4.58636998-4.28012753 4.12648725-6.63767534 9.66376599-6.63767534 15.59137409 0 2.09905842.30001379 4.12960158.85955508 6.05010508-.62182789.62598033-1.24365578 1.28829451-1.86236934 1.98486632h-.00103811c-.72460078.81803068-1.44401101 1.68277631-2.14784959 2.59838933-.01868598-.0415244-.03633385-.08408691-.05501983-.12664942-1.40767716-3.32818066-2.12189684-6.86398332-2.12189684-10.50671131s.71421968-7.17749254 2.12189684-10.50671131c1.3599241-3.21502667 3.30534224-6.10097247 5.78331081-8.57894104s5.36391437-4.42338671 8.57894104-5.78331081c3.32818066-1.40767716 6.86398332-2.12189684 10.50671131-2.12189684s7.17853065.71421968 10.50671131 2.12189684c2.13331605.9031557 4.13063969 2.06895323 5.95563707 3.47663039z"/>\n' +
            '    <path d="M982.35146284 828.1890809c-6.59096039 0-12.50299684-2.9586135-16.47792003-7.61661307l-.00103811-.00103811 4.08911529-2.56828414h.00103811c.78792549.87720295 1.65267112 1.6505949 2.58593201 2.31394719 1.72637693 1.2249698 3.74031033 2.10632519 5.98781848 2.62018964 1.34331434.30728056 2.67728569.46403517 3.96350398.46403517 1.50941194 0 3.0001379-.21488877 4.4327297-.63739954 1.43362991-.42354888 2.84961195-1.06821519 4.20849794-1.91531295 1.42532503-.88862216 2.68559057-1.95268491 3.74446277-3.16000684 1.05783409-1.20939815 1.94645625-2.59735122 2.63887562-4.12648725.69138126-1.52705981 1.14918777-3.1039489 1.36096221-4.68499043.15986894-1.19175028.18270736-2.41152953.07059148-3.64168988-1.51460249 5.2113122-5.16252103 8.12321075-8.06196226 9.67414709-2.95653728 1.58000342-5.69714768 2.0866011-6.45496798 2.20286942v.00311433l-.11938265.01557165-.01141921.01141921-.08823935.00103811c-.15156406.01660976-1.32462836.14429729-2.20494564.14429729-.15986894 0-.30416623-.00415244-.42666321-.01245732-1.63502325-.1141921-3.15689251-.56576995-4.52096905-1.34227623l-.01764787-.01141921-.01764787-.01349543c-.40693912-.34672874-.60729435-.73498188-.59795136-1.15541643.01349543-.58757026.45261596-1.04745299.64155198-1.21874114l4.45660623-2.79874456.04463873-.02802897 11.71403324-7.30414196.05605794-.03529574.34776685-.21696499 4.16801165-2.59838933-.00207622-.00519055.15364028-.09550612 2.17899289-1.36096221.34050008-.21281255.00622866-.00415244.00726677-.00311433c.25848939-.13910674.64985686-.30416623 1.05056732-.30416623.39863424 0 .93845144.16194516 1.24780822.93948955l.00311433.0103811c.01141921.0311433.03633385.10900155.06436282.19516468.03944818.12353509.0934299.2906708.11107777.33634764l.00311433.01141921c.6540093 2.0866011.9862045 4.26351777.9862045 6.4674253 0 11.94449366-9.71774771 21.66224137-21.66224137 21.66224137zm24.86896316-32.16895268c-.51075012-1.20836004-1.11285392-2.38557678-1.78866353-3.49739259-.00415244-.00415244-.00622866-.00934299-.00934299-.01453354-.04048629-.06643904-.08097258-.13287808-.12249698-.19931712-.00207622-.00207622-.00311433-.00519055-.00519055-.00830488-.02906708-.04671495-.05813416-.09239179-.08720124-.13910674-.48168304-.73290566-1.15437832-1.10351093-2.00043797-1.10351093-.85021209 0-1.70146229.36541472-2.26827035.6747715l-.60002758.36956716c-.00207622.00103811-.00311433.00207622-.00311433.00207622l-.00311433.00207622-.00415244.00207622-3.49116393 2.15304014-.57303672.3529574v.00103811l-.00934299.00415244-1.29556128.7993447-.16505949.10277289-.04463873-.04982928-.01349543-.01557165-.07059148-.07889636c-1.11700636-1.24988444-2.40322465-2.30045176-3.82335913-3.1247111-1.42013448-.82425934-3.01570955-1.44504912-4.74104837-1.84575958-1.34020001-.311433-2.67209514-.46818761-3.96038965-.46818761-1.50733572 0-3.0001379.21592688-4.43688214.64155198-1.43882046.42666321-2.86206927 1.07548196-4.23133636 1.92984649-1.93815137 1.20836004-3.54410754 2.69493356-4.77426789 4.41923427-1.23119846 1.72430071-2.12293495 3.73615789-2.64925672 5.98055171-.47649249 2.02742883-.59795136 4.01852381-.36230039 5.92968432 1.08274873-.87616484 2.11566818-1.63813758 3.05619584-2.29007066.15156406-.103811.30001379-.20554578.44534919-.30416623 1.04952921-.70799102 1.97033278-1.27168475 2.70739088-1.69730985.13391619-.63428521.32804276-1.26441798.58030349-1.88624587.86370752-2.12189684 2.27865145-3.80571126 4.2043455-5.00680453 1.70146229-1.06094842 3.57006029-1.5986894 5.55285039-1.5986894.26056561 0 .52735988.00934299.79311604.02699086 1.27998963.08927746 2.49250211.38617692 3.60639414.88031728l.01453354.00726677.01349543.00934299c.90523192.56576995 1.37964819 1.14814966 1.40767716 1.73260559.0103811.21281255-.03841007.42043455-.14325918.61871356-.11211588.21385066-.28963269.41628211-.5294361.60106569l-.00622866.00415244-.01349543.00934299-.415244.2595275-11.65486097 7.26677-.25329884.15779272c-.00103811 0-.00103811.00103811-.00207622.00207622-.00830488.00519055-.01660976.0103811-.02491464.01453354-3.0728056 1.92465594-5.72725287 3.9136747-8.00278999 5.85286418-1.36200032 1.15853076-2.58697012 2.30045176-3.68425239 3.39877214-1.23638901 1.23638901-2.31083286 2.4187963-3.23371265 3.51296424-.17959303.21177444-.3529574.41835833-.52009311.622866-.6124849.74847731-1.1523021 1.44920156-1.62360404 2.08971543-.47026383.64155198-.8720124 1.22289358-1.20836004 1.73260559-.82529745 1.24884633-1.25922743 2.06480079-1.36407654 2.26723224 0 .00207622-.00103811.00311433-.00207622.00415244-.01349543.02699086-.0207622.0415244-.02283842.04463873l5.90165535-3.70709081.03425763-.0207622.01245732-.00830488c.30001379.37268149.61040868.73913432.93222278 1.09728227.33011898.36749094.67061906.726677 1.02150024 1.07859629 2.47796857 2.47796857 5.36391437 4.42338671 8.57894104 5.78331081 3.32818066 1.40767716 6.86398332 2.12189684 10.50671131 2.12189684s7.17853065-.71421968 10.50671131-2.12189684c3.21502667-1.3599241 6.10097247-3.30534224 8.57894104-5.78331081s4.42338671-5.36391437 5.78331081-8.57894104c1.40767716-3.32818066 2.12189684-6.86398332 2.12189684-10.50671131s-.71421968-7.17749254-2.12189684-10.50671131z"/>\n' +
            '  </g>\n' +
            '  <g fill="#2e4263" font-size="60.109">\n' +
            '    <text font-family="\'BremenBT-Bold\',\'Bremen Bd BT\',fantasy" transform="matrix(.83402 0 0 .83402 1242.43 822.32)">\n' +
            '      \/\n' +
            '    </text>\n' +
            '    <text x="15.321" font-family="\'Arial-Black\',\'Arial\',sans-serif" font-weight="900" transform="matrix(.83402 0 0 .83402 1242.43 822.32)">\n' +
            teamName +
            '    </text>\n' +
            '  </g>\n' +
            '  <path fill="#2e4263" fill-rule="nonzero" d="M1092.31326459 787.33529996c-.88343161-3.32506633-3.48493527-5.94317975-6.78820129-6.83180191-5.98678037-1.61426105-29.99515034-1.61426105-29.99515034-1.61426105s-24.00733186 0-29.99515034 1.61426105c-3.30326602.88862216-5.90476968 3.50673558-6.78716318 6.83180191-1.60491806 6.02622855-1.60491806 18.59877876-1.60491806 18.59877876s0 12.57358832 1.60491806 18.59981687c.8823935 3.32402822 3.48389716 5.83314009 6.78716318 6.72176225 5.98781848 1.61529916 29.99515034 1.61529916 29.99515034 1.61529916s24.00836997 0 29.99515034-1.61529916c3.30326602-.88862216 5.90476968-3.39773403 6.78820129-6.72176225 1.60387995-6.02622855 1.60387995-18.59981687 1.60387995-18.59981687s0-12.57255021-1.60387995-18.59877876zm-44.63561567 30.01487443v-22.83115323l20.0666663 11.41609567-20.0666663 11.41505756zm83.62079861-25.31327424c-7.65917558 0-13.83696819 6.17779261-13.83696819 13.83696819s6.17779261 13.83696819 13.83696819 13.83696819 13.83696819-6.17779261 13.83696819-13.83696819-6.17779261-13.83696819-13.83696819-13.83696819zm0 22.83322945c-4.94970848 0-8.99626126-4.03409546-8.99626126-8.99626126 0-4.96112769 4.03513357-8.99626126 8.99626126-8.99626126 4.9621658 0 8.99626126 4.03513357 8.99626126 8.99626126 0 4.9621658-4.04655278 8.99626126-8.99626126 8.99626126zm17.63126024-23.3989994c0 1.79385408-1.44504912 3.22748399-3.22748399 3.22748399-1.79489219 0-3.22748399-1.44504912-3.22748399-3.22748399 0-1.78243487 1.44504912-3.22748399 3.22748399-3.22748399 1.78243487 0 3.22748399 1.44504912 3.22748399 3.22748399zm9.16443508 3.27523705c-.20450767-4.32372815-1.19278839-8.15331594-4.360062-11.30813223-3.15481629-3.15481629-6.98440408-4.14309701-11.30813223-4.35902389-4.45556812-.25329884-17.81085327-.25329884-22.26642139 0-4.31230894.20450767-8.14189673 1.19175028-11.30917034 4.34656657-3.16727361 3.1558544-4.1420589 6.98544219-4.35902389 11.30917034-.25329884 4.45556812-.25329884 17.81085327 0 22.26642139.20450767 4.32372815 1.19175028 8.15331594 4.35902389 11.30813223 3.16727361 3.1558544 6.98544219 4.14309701 11.30917034 4.360062 4.45556812.25226073 17.81085327.25226073 22.26642139 0 4.32372815-.20450767 8.15331594-1.19278839 11.30813223-4.360062 3.1558544-3.15481629 4.14309701-6.98440408 4.360062-11.30813223.25226073-4.45556812.25226073-17.79943406 0-22.25500218zm-5.75631995 27.03653684c-.93948955 2.35962403-2.75825827 4.17839275-5.13033962 5.13033962-3.55345053 1.40871527-11.98290373 1.08378684-15.90903575 1.08378684-3.92613202 0-12.36804254.31247111-15.90799764-1.08378684-2.36066214-.93948955-4.17943086-2.75825827-5.13033962-5.13033962-1.40975338-3.55241242-1.08378684-11.98290373-1.08378684-15.90903575 0-3.92613202-.31350922-12.36804254 1.08378684-15.90799764.93948955-2.36066214 2.75722016-4.17943086 5.13033962-5.13033962 3.55241242-1.40975338 11.98186562-1.08378684 15.90799764-1.08378684 3.92613202 0 12.36804254-.31350922 15.90903575 1.08378684 2.35962403.93948955 4.17839275 2.75722016 5.13033962 5.13033962 1.40871527 3.55241242 1.08378684 11.98186562 1.08378684 15.90799764 0 3.92613202.32492843 12.36804254-1.08378684 15.90903575zm77.7440579-29.4407996c.0415244.59068459.0415244 1.18136918.0415244 1.77101566 0 18.00809417-13.70616633 38.75783685-38.75679874 38.75783685-7.71730974 0-14.88753551-2.23608894-20.9179165-6.11550601 1.09624416.12664942 2.15096392.16817382 3.28977059.16817382 6.36776674 0 12.22997391-2.14992581 16.9108119-5.81964466-5.98781848-.12664942-11.00708033-4.048629-12.73553348-9.446801.84294532.12664942 1.68692875.21073633 2.57243658.21073633 1.22289358 0 2.44578716-.16817382 3.58459383-.46299706-6.24215543-1.26545609-10.92299342-6.74875311-10.92299342-13.36981869v-.16817382c1.81357817 1.01215725 3.92197958 1.64436624 6.15703041 1.72845315-3.66868074-2.44578716-6.0729435-6.62106558-6.0729435-11.34446608 0-2.52987407.6747715-4.85004992 1.85614068-6.87436442 6.70515249 8.26646993 16.78416248 13.66464193 28.08710416 14.25532652-.21073633-1.01215725-.33738575-2.06687701-.33738575-3.12159677 0-7.50657341 6.0729435-13.62104131 13.62207942-13.62104131 3.92197958 0 7.4640109 1.64436624 9.95236057 4.30088973 3.07903426-.58964648 6.0314191-1.72845315 8.64538008-3.28873248-1.01215725 3.16312117-3.16312117 5.81964466-5.98781848 7.50657341 2.7406104-.29482324 5.398172-1.05471976 7.84395916-2.10840141-1.85510257 2.699086-4.17527842 5.10231065-6.83180191 7.04253824z"/>\n' +
            '  <text fill="#2e4263" font-family="\'Arial-BoldMT\',\'Arial\',sans-serif" font-size="182.371" font-weight="700" transform="translate(952.767 745.602) scale(.8777)">\n' +
            playerName +
            '  </text>\n' +
            '  <path fill="#2d8ec9" d="M735.60186936 725.04657537c-1.862738 6.73291632-2.85829344 13.8280465-2.85829344 21.15382167 0 17.94716375 5.97546324 34.50992483 16.04127968 47.80157523-48.62944695-7.77268315-85.83658658-49.95355164-85.83658658-100.7556425 0-56.31557165 45.72113604-102.0367077 102.03660115-102.0367077 54.8967054 0 99.72599636 43.44579386 101.95041555 97.79880561-14.25045177-13.6842263-33.59959619-22.1003717-54.89936874-22.1003717-4.34976224 0-8.61855902.35102784-12.77496299 1.02591748-5.97173456-19.09666006-23.81183215-32.97200743-44.86657768-32.97200743-25.93983854 0-46.99927154 21.059433-46.99927154 46.99927155 0 19.25965629 11.61044545 35.82934205 28.20676459 43.0853378z"/>\n' +
            '  <path fill="#2d8ec9" fill-rule="nonzero" d="M692.09321227 831.99858632l14.1971182-.87886922c.33802663 2.29858104.94647456 4.05631949 1.8929491 5.27321533 1.55492247 1.96055442 3.71829287 2.9746343 6.62532183 2.9746343 2.09576507 0 3.78589819-.5408426 4.93518871-1.55492248 1.14929052-.94647454 1.69013312-2.16337039 1.69013312-3.44787156s-.5408426-2.36618637-1.6225278-3.38026624c-1.0816852-1.01407987-3.65068753-1.8929491-7.6394017-2.77181831-6.5577165-1.48731715-11.29008923-3.44787157-14.06190755-5.88166326-2.83942364-2.50139702-4.19153014-5.61124196-4.19153014-9.39714015 0-2.43379169.67605325-4.79997806 2.1633704-7.03095377 1.41971182-2.23097572 3.58308221-3.92110884 6.49011118-5.20561001 2.90702896-1.28450117 6.8281378-1.8929491 11.89853716-1.8929491 6.15208455 0 10.88445729 1.14929053 14.12951288 3.44787157 3.24505559 2.29858104 5.20561 5.94926858 5.81405793 10.95206261l-14.12951288.87886923c-.33802662-2.23097572-1.14929052-3.7858982-2.36618637-4.79997806-1.21689584-.94647455-2.83942364-1.48731715-4.9351887-1.48731715-1.75773845 0-3.04223962.40563195-3.92110884 1.14929052-.87886923.74365857-1.3521065 1.6225278-1.3521065 2.63660767 0 .8112639.33802662 1.48731714 1.0816852 2.09576507.74365857.67605324 2.36618636 1.21689584 5.00279403 1.82534377 6.5577165 1.3521065 11.22248391 2.77181831 14.06190756 4.25913546 2.83942364 1.41971182 4.86758338 3.24505559 6.21968988 5.34082066 1.28450117 2.16337039 1.89294909 4.52955676 1.89294909 7.16616442 0 3.10984494-.87886922 5.94926858-2.56900234 8.58587625s-4.12392481 4.59716209-7.16616443 5.94926858c-3.10984494 1.3521065-6.96334845 2.02815974-11.69572119 2.02815974-8.24784962 0-13.9266969-1.55492247-17.10414717-4.73237273-3.17745026-3.17745027-4.9351887-7.23376975-5.34082066-12.10135314zM767.82258443 830.51126918v-10.0731934h23.12102108v20.61962406c-4.46195144 3.04223962-8.31545495 5.07039936-11.76332651 6.15208456-3.38026624 1.0816852-7.43658573 1.6225278-12.10135314 1.6225278-5.7464526 0-10.41122002-.94647455-13.99430223-2.90702897-3.65068754-1.96055442-6.42250586-4.86758339-8.4506656-8.78869222-1.96055442-3.85350352-2.97463429-8.31545495-2.97463429-13.31824899 0-5.27321533 1.0816852-9.87037741 3.24505559-13.79148625 2.1633704-3.92110884 5.40842598-6.8281378 9.59995612-8.85629755 3.24505559-1.55492247 7.70700702-2.36618637 13.25064366-2.36618637 5.34082065 0 9.32953482.47323728 11.96614248 1.41971182 2.63660767 1.01407988 4.86758339 2.50139702 6.62532183 4.52955677 1.75773845 2.02815974 3.04223962 4.59716208 3.92110884 7.77461235l-14.39993418 2.56900234c-.60844792-1.82534377-1.6225278-3.2450556-3.04223961-4.19153014-1.41971182-1.01407987-3.2450556-1.48731714-5.40842599-1.48731714-3.31266091 0-5.88166325 1.14929052-7.84221767 3.44787156-1.96055442 2.23097572-2.90702897 5.88166326-2.90702897 10.81685196 0 5.20561001.94647455 8.92390288 2.90702897 11.22248392 1.96055442 2.23097572 4.73237273 3.31266091 8.24784962 3.31266091 1.69013312 0 3.2450556-.20281597 4.79997806-.67605324 1.48731715-.47323728 3.2450556-1.3521065 5.20561001-2.50139702v-4.52955676h-10.00558807zM799.80074812 799.61563575h14.94077678v36.50687539h23.39144237v11.89853716h-38.33221915v-48.40541255z"/>\n' +
            '</svg>\n';
    }
}
//#region setup
/**
 * Width  of youtube template
 */
Youtube_Template.width = 2560;
/**
 * Height  of youtube template
 */
Youtube_Template.height = 1440;
//# sourceMappingURL=youtube-title.template.js.map