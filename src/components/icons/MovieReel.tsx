import React from "react";

export interface IProps {
  className?: string;
}
const MovieReel: React.FC<IProps> = ({ className }: IProps): JSX.Element => {
  return (
    <svg
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 461.492 461.492"
    >
      <g>
        <path d="M306.104,455.438h155.388v-50h-73.774C363.821,427.739,336.119,444.62,306.104,455.438z" />
        <path
          d="M449.922,230.746c0-124.044-100.917-224.961-224.961-224.961S0,106.702,0,230.746s100.917,224.961,224.961,224.961
  S449.922,354.79,449.922,230.746z M54.299,158.13l22.443-38.873c5.411-9.372,17.394-12.583,26.767-7.172l49.011,28.296
  c5.022,2.9,8.503,7.876,9.503,13.589l5.129,29.288c0.818,4.678-0.1,9.309-2.332,13.177c-2.284,3.956-5.944,7.116-10.534,8.711
  l-27.573,9.586c-5.376,1.869-11.301,1.308-16.23-1.539l-49.012-28.297C52.099,179.485,48.888,167.502,54.299,158.13z
   M167.452,279.153l-5.485,28.671c-1.069,5.591-4.518,10.439-9.447,13.287l-49.011,28.297c-9.373,5.41-21.355,2.199-26.767-7.172
  l-22.443-38.874c-5.411-9.372-2.2-21.355,7.172-26.767l49.011-28.297c5.023-2.9,11.072-3.426,16.521-1.436l27.929,10.201
  c4.46,1.631,8.012,4.74,10.245,8.607C167.459,269.631,168.365,274.381,167.452,279.153z M266.999,395.258
  c0,10.822-8.772,19.595-19.595,19.595h-44.888c-10.821,0-19.594-8.771-19.594-19.595v-56.593c0-5.8,2.57-11.302,7.017-15.024
  l22.801-19.086c3.642-3.047,8.11-4.568,12.576-4.568c4.569,0.001,9.135,1.591,12.812,4.769l22.089,19.087
  c4.307,3.721,6.782,9.133,6.782,14.824V395.258z M187.386,230.746c0-20.752,16.823-37.574,37.575-37.574
  s37.574,16.822,37.574,37.574s-16.822,37.574-37.574,37.574S187.386,251.498,187.386,230.746z M266.999,122.827
  c0,5.8-2.569,11.302-7.019,15.024l-22.799,19.086c-3.643,3.048-8.11,4.569-12.577,4.569c-4.569,0-9.135-1.591-12.812-4.769
  l-22.088-19.085c-4.308-3.722-6.783-9.133-6.783-14.826V66.234c0-10.822,8.772-19.594,19.594-19.594h44.888
  c10.822,0,19.595,8.771,19.595,19.594V122.827z M282.471,182.339l5.483-28.671c1.069-5.591,4.518-10.44,9.448-13.287l49.01-28.296
  c9.373-5.411,21.356-2.2,26.767,7.172l22.444,38.873c5.41,9.372,2.2,21.355-7.173,26.767l-49.011,28.296
  c-5.022,2.9-11.071,3.426-16.521,1.436l-27.929-10.202c-4.46-1.63-8.014-4.74-10.245-8.607
  C282.462,191.861,281.557,187.111,282.471,182.339z M346.412,349.408l-49.01-28.297c-5.022-2.9-8.503-7.877-9.503-13.59
  l-5.13-29.287c-0.817-4.678,0.099-9.309,2.332-13.178c2.285-3.955,5.944-7.114,10.534-8.711l27.572-9.586
  c5.377-1.869,11.301-1.308,16.23,1.539l49.011,28.297c9.373,5.41,12.583,17.395,7.173,26.767l-22.444,38.874
  C367.769,351.607,355.785,354.818,346.412,349.408z"
        />
      </g>
    </svg>
  );
};

export default MovieReel;
