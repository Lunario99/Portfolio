export default function Intro({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex flex-col bg-dark border border-dark rounded-lg shadow md:flex-row">
      <img
        className="object-cover rounded-t-lg h-96 md:w-48 md:h-full md:rounded-none md:rounded-s-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col items-start p-4 leading-normal bg-dark md:col-5">
        <h2 className="">{name}</h2>
        <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-col p4 md:col-5 items-center">
        <div className="flex flex-row items-baseline md:m-5">
          <a
            href="https://www.linkedin.com/in/daniele-moretti-693a82302/"
            className="m2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g fill="#ffffff">
                <g transform="scale(5.33333,5.33333)">
                  <path d="M11.5,6c-3.01977,0 -5.5,2.48023 -5.5,5.5v25c0,3.01977 2.48023,5.5 5.5,5.5h25c3.01977,0 5.5,-2.48023 5.5,-5.5v-25c0,-3.01977 -2.48023,-5.5 -5.5,-5.5zM11.5,9h25c1.39823,0 2.5,1.10177 2.5,2.5v25c0,1.39823 -1.10177,2.5 -2.5,2.5h-25c-1.39823,0 -2.5,-1.10177 -2.5,-2.5v-25c0,-1.39823 1.10177,-2.5 2.5,-2.5zM15.5,13c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM14,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-13c0,-0.553 -0.447,-1 -1,-1zM21,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-7.5c0,-1.379 1.121,-2.5 2.5,-2.5c1.379,0 2.5,1.121 2.5,2.5v7.5c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-8c0,-3.309 -2.691,-6 -6,-6c-1.538,0 -2.937,0.58602 -4,1.54102v-0.54102c0,-0.553 -0.447,-1 -1,-1z"></path>
                </g>
              </g>
            </svg>
            <p className="flex flex-col items-center">LinkedIn</p>
          </a>
          <a href="https://danmore.itch.io/" className="m2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g fill="#ffffff">
                <g transform="scale(8,8)">
                  <path d="M16,5c-3.252,0 -7.68789,0.05086 -8.58789,0.13086c-1.01,0.606 -3.0093,2.90009 -3.0293,3.49609v1c0,1.263 1.18291,2.37305 2.25391,2.37305c1.283,0 2.35352,-1.07003 2.35352,-2.33203c0,1.262 1.04027,2.33203 2.32227,2.33203c1.293,0 2.29297,-1.06903 2.29297,-2.33203c0,1.262 1.08981,2.33203 2.38281,2.33203h0.02148c1.293,0 2.38281,-1.06903 2.38281,-2.33203c0,1.262 1.00997,2.33203 2.29297,2.33203c1.283,0 2.32422,-1.06903 2.32422,-2.33203c0,1.262 1.07052,2.33203 2.35352,2.33203c1.071,0 2.25195,-1.11005 2.25195,-2.37305v-1c-0.02,-0.596 -2.0193,-2.89009 -3.0293,-3.49609c-3.142,-0.111 -5.33394,-0.13086 -8.58594,-0.13086zM13.55078,11.74219c-1.053,1.81 -3.69847,1.83172 -4.73047,0.01172c-0.63,1.092 -2.05602,1.51364 -2.66602,1.30664c-0.178,1.899 -0.30081,11.6482 0.99219,13.2832c3.797,0.885 14.01803,0.866 17.70703,0c1.495,-1.524 1.16019,-11.5222 0.99219,-13.2832c-0.61,0.207 -2.03625,-0.21464 -2.65625,-1.30664c-1.043,1.82 -3.68823,1.79828 -4.74023,-0.01172c-0.325,0.59 -1.08222,1.36719 -2.44922,1.36719c-1.003,0.039 -1.94822,-0.50219 -2.44922,-1.36719zM11.41992,14c0.8,0 1.53016,0.00047 2.41016,0.98047c1.45,-0.15 2.88984,-0.15 4.33984,0c0.89,-0.97 1.61016,-0.9707 2.41016,-0.9707c2.58,0 3.20086,3.80984 4.13086,7.08984c0.84,3.05 -0.28188,3.13086 -1.67188,3.13086c-2.07,-0.08 -3.21875,-1.57984 -3.21875,-3.08984c-1.93,0.32 -5.01062,0.44 -7.64062,0c0,1.51 -1.14875,3.00984 -3.21875,3.08984c-1.39,0 -2.51187,-0.08086 -1.67187,-3.13086c0.93,-3.3 1.55086,-7.08984 4.13086,-7.08984zM16,16.87695c0,0 -1.694,1.56242 -2,2.10742l1.10742,-0.04102v0.9668c0,0.058 0.81858,0.00781 0.89258,0.00781c0.447,0.017 0.89258,0.03319 0.89258,-0.00781v-0.9668l1.10742,0.04102c-0.306,-0.546 -2,-2.10742 -2,-2.10742z"></path>
                </g>
              </g>
            </svg>
            <p className="flex flex-col items-center">Itch.io</p>
          </a>
          <a href="/img/Moretti Resume.pdf" className="m2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="90"
              height="90"
              viewBox="0,0,256,256"
            >
              <g fill="#ffffff">
                <g transform="scale(8.53333,8.53333)">
                  <path d="M24.707,8.793l-6.5,-6.5c-0.188,-0.188 -0.442,-0.293 -0.707,-0.293h-10.5c-1.105,0 -2,0.895 -2,2v22c0,1.105 0.895,2 2,2h16c1.105,0 2,-0.895 2,-2v-16.5c0,-0.265 -0.105,-0.519 -0.293,-0.707zM18,21h-8c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1h8c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM20,17h-10c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1h10c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM18,10c-0.552,0 -1,-0.448 -1,-1v-5.096l6.096,6.096z"></path>
                </g>
              </g>
            </svg>
            <p className="flex flex-col items-center">Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
