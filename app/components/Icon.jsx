import clsx from 'clsx';

function Icon({children, className, fill = 'currentColor', stroke, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
      fill={fill}
      stroke={stroke}
      className={clsx('w-5 h-5', className)}
    >
      {children}
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <Icon {...props} stroke={props.stroke || 'currentColor'}>
      <title>Menu</title>
      <line x1="3" y1="6.375" x2="17" y2="6.375" strokeWidth="1.25" />
      <line x1="3" y1="10.375" x2="17" y2="10.375" strokeWidth="1.25" />
      <line x1="3" y1="14.375" x2="17" y2="14.375" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconClose(props) {
  return (
    <Icon {...props} stroke={props.stroke || 'currentColor'}>
      <title>Close</title>
      <line
        x1="4.44194"
        y1="4.30806"
        x2="15.7556"
        y2="15.6218"
        strokeWidth="1.25"
      />
      <line
        y1="-0.625"
        x2="16"
        y2="-0.625"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
        strokeWidth="1.25"
      />
    </Icon>
  );
}

export function IconArrow({direction = 'right'}) {
  let rotate;

  switch (direction) {
    case 'right':
      rotate = 'rotate-0';
      break;
    case 'left':
      rotate = 'rotate-180';
      break;
    case 'up':
      rotate = '-rotate-90';
      break;
    case 'down':
      rotate = 'rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <Icon className={`w-5 h-5 ${rotate}`}>
      <title>Arrow</title>
      <path d="M7 3L14 10L7 17" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconCaret({
  direction = 'down',
  stroke = 'currentColor',
  ...props
}) {
  let rotate;

  switch (direction) {
    case 'down':
      rotate = 'rotate-0';
      break;
    case 'up':
      rotate = 'rotate-180';
      break;
    case 'left':
      rotate = '-rotate-90';
      break;
    case 'right':
      rotate = 'rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <Icon
      {...props}
      className={`w-5 h-5 transition ${rotate}`}
      fill="transparent"
      stroke={stroke}
    >
      <title>Caret</title>
      <path d="M14 8L10 12L6 8" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconSelect(props) {
  return (
    <Icon {...props}>
      <title>Select</title>
      <path d="M7 8.5L10 6.5L13 8.5" strokeWidth="1.25" />
      <path d="M13 11.5L10 13.5L7 11.5" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconBag(props) {
  return (
    <Icon {...props}>
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </Icon>
  );
}

export function IconLogin(props) {
  return (
    <Icon {...props}>
      <title>Login</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M8,10.6928545 C10.362615,10.6928545 12.4860225,11.7170237 13.9504747,13.3456144 C12.4860225,14.9758308 10.362615,16 8,16 C5.63738499,16 3.51397752,14.9758308 2.04952533,13.3472401 C3.51397752,11.7170237 5.63738499,10.6928545 8,10.6928545 Z"
          fill="currentColor"
        ></path>
        <path
          d="M8,3.5 C6.433,3.5 5.25,4.894 5.25,6.5 C5.25,8.106 6.433,9.5 8,9.5 C9.567,9.5 10.75,8.106 10.75,6.5 C10.75,4.894 9.567,3.5 8,3.5 Z"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </Icon>
  );
}

export function IconAccount(props) {
  return (
    <Icon {...props}>
      <title>Account</title>
      <path
        fillRule="evenodd"
        d="M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z"
      />
    </Icon>
  );
}

export function IconHelp(props) {
  return (
    <Icon {...props}>
      <title>Help</title>
      <path d="M3.375 10a6.625 6.625 0 1 1 13.25 0 6.625 6.625 0 0 1-13.25 0ZM10 2.125a7.875 7.875 0 1 0 0 15.75 7.875 7.875 0 0 0 0-15.75Zm.699 10.507H9.236V14h1.463v-1.368ZM7.675 7.576A3.256 3.256 0 0 0 7.5 8.67h1.245c0-.496.105-.89.316-1.182.218-.299.553-.448 1.005-.448a1 1 0 0 1 .327.065c.124.044.24.113.35.208.108.095.2.223.272.383.08.154.12.34.12.558a1.3 1.3 0 0 1-.076.471c-.044.131-.11.252-.197.361-.08.102-.174.197-.283.285-.102.087-.212.182-.328.284a3.157 3.157 0 0 0-.382.383c-.102.124-.19.27-.262.438a2.476 2.476 0 0 0-.164.591 6.333 6.333 0 0 0-.043.81h1.179c0-.263.021-.485.065-.668a1.65 1.65 0 0 1 .207-.47c.088-.139.19-.263.306-.372.117-.11.244-.223.382-.34l.35-.306c.116-.11.218-.23.305-.361.095-.139.168-.3.219-.482.058-.19.087-.412.087-.667 0-.35-.062-.664-.186-.942a1.881 1.881 0 0 0-.513-.689 2.07 2.07 0 0 0-.753-.427A2.721 2.721 0 0 0 10.12 6c-.4 0-.764.066-1.092.197a2.36 2.36 0 0 0-.83.536c-.225.234-.4.515-.523.843Z" />
    </Icon>
  );
}

export function IconSearch(props) {
  return (
    <Icon {...props}>
      <title>Search</title>
      <path
        fillRule="evenodd"
        d="M13.3 8.52a4.77 4.77 0 1 1-9.55 0 4.77 4.77 0 0 1 9.55 0Zm-.98 4.68a6.02 6.02 0 1 1 .88-.88l4.3 4.3-.89.88-4.3-4.3Z"
      />
    </Icon>
  );
}

export function IconCheck({stroke = 'currentColor', ...props}) {
  return (
    <Icon {...props} fill="transparent" stroke={stroke}>
      <title>Check</title>
      <circle cx="10" cy="10" r="7.25" strokeWidth="1.25" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.04 10.37 2.42 2.41 3.5-5.56"
      />
    </Icon>
  );
}

export function IconXMark({stroke = 'currentColor', ...props}) {
  return (
    <Icon {...props} fill="transparent" stroke={stroke}>
      <title>Delete</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </Icon>
  );
}

export function IconRemove(props) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Remove</title>
      <path
        d="M4 6H16"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.5 6L6 17H14L14.5 6"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6"
        strokeWidth="1.25"
      />
    </Icon>
  );
}

export function IconFilters(props) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Filters</title>
      <circle cx="4.5" cy="6.5" r="2" />
      <line x1="6" y1="6.5" x2="14" y2="6.5" />
      <line x1="4.37114e-08" y1="6.5" x2="3" y2="6.5" />
      <line x1="4.37114e-08" y1="13.5" x2="8" y2="13.5" />
      <line x1="11" y1="13.5" x2="14" y2="13.5" />
      <circle cx="9.5" cy="13.5" r="2" />
    </Icon>
  );
}

export function IconInfo(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
    >
      <path
        id="Icon_awesome-info-circle"
        data-name="Icon awesome-info-circle"
        d="M8.563.563a8,8,0,1,0,8,8A8,8,0,0,0,8.563.563Zm0,3.548A1.355,1.355,0,1,1,7.208,5.466,1.355,1.355,0,0,1,8.563,4.111ZM10.369,12.3a.387.387,0,0,1-.387.387H7.143a.387.387,0,0,1-.387-.387V11.53a.387.387,0,0,1,.387-.387H7.53V9.079H7.143a.387.387,0,0,1-.387-.387V7.917a.387.387,0,0,1,.387-.387H9.208a.387.387,0,0,1,.387.387v3.226h.387a.387.387,0,0,1,.387.387Z"
        transform="translate(-0.563 -0.563)"
        fill="currentColor"
      />
    </svg>
  );
}
export function IconZoomOut(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="19.756"
      height={20}
      viewBox="0 0 19.756 20"
    >
      <g
        id="zoom_out"
        data-name="zoom out"
        transform="translate(-635.122 -173)"
      >
        <path
          id="Path_15420"
          data-name="Path 15420"
          d="M19.722,17.851l-2.009-2.371a.985.985,0,0,1-.156-1.2,9.179,9.179,0,1,0-3.272,3.272.985.985,0,0,1,1.2.156l1.987,2.016a1.983,1.983,0,0,0,1.2.74,1.175,1.175,0,0,0,1.251-.379,1.687,1.687,0,0,0-.193-2.238ZM3.742,10.678a6,6,0,1,1,4.9,4.9,6.012,6.012,0,0,1-4.9-4.9Z"
          transform="translate(634.622 172.5)"
        />
        <line
          id="Line_1"
          data-name="Line 1"
          x2={6}
          transform="translate(641.2 182.2)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}
export function IconFullScreen(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
    <path id="Icon_awesome-expand-arrows-alt" data-name="Icon awesome-expand-arrows-alt" d="M20,16.179v5a1.069,1.069,0,0,1-1.071,1.071h-5a1.073,1.073,0,0,1-.759-1.83L14.786,18.8,10,14.018l-4.787,4.79L6.83,20.42a1.073,1.073,0,0,1-.759,1.83h-5A1.069,1.069,0,0,1,0,21.179v-5a1.073,1.073,0,0,1,1.83-.759l1.616,1.616L8.235,12.25,3.446,7.46,1.83,9.08A1.073,1.073,0,0,1,0,8.321v-5A1.069,1.069,0,0,1,1.071,2.25h5A1.073,1.073,0,0,1,6.83,4.08L5.214,5.7,10,10.482l4.787-4.79L13.17,4.08a1.073,1.073,0,0,1,.759-1.83h5A1.069,1.069,0,0,1,20,3.321v5a1.073,1.073,0,0,1-1.83.759L16.554,7.464,11.765,12.25l4.789,4.79,1.615-1.616A1.071,1.071,0,0,1,20,16.179Z" transform="translate(0 -2.25)" />
  </svg>
  );
}

export function IconZoomIn(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="19.756"
      height={20}
      viewBox="0 0 19.756 20"
    >
      <g id="Group_5" data-name="Group 5" transform="translate(-635.122 -173)">
        <path
          id="Path_15421"
          data-name="Path 15421"
          d="M19.722,17.851l-2.009-2.371a.985.985,0,0,1-.156-1.2,9.179,9.179,0,1,0-3.272,3.272.985.985,0,0,1,1.2.156l1.987,2.016a1.983,1.983,0,0,0,1.2.74,1.175,1.175,0,0,0,1.251-.379,1.687,1.687,0,0,0-.193-2.238ZM3.742,10.678a6,6,0,1,1,4.9,4.9,6.012,6.012,0,0,1-4.9-4.9Z"
          transform="translate(634.623 172.5)"
          fill="currentColor"
        />
        <g id="Group_4" data-name="Group 4" transform="translate(-0.3 -0.3)">
          <line
            id="Line_2"
            data-name="Line 2"
            x2={6}
            transform="translate(641.5 182.5)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2}
          />
          <line
            id="Line_3"
            data-name="Line 3"
            x2={6}
            transform="translate(644.5 179.5) rotate(90)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2}
          />
        </g>
      </g>
    </svg>
  );
}
