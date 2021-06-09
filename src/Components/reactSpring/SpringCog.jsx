import { useState, useEffect } from "react";
import { CenterPagination } from "../Homepage/CenterPagination";
import styles from "./SpringCog.module.css"


export const SpringCog = () => {
  const img = [
    ["https://logos-download.com/wp-content/uploads/2019/01/Cognizant_Technology_Solutions_Corp_Logo.png",
      "https://media.istockphoto.com/vectors/we-are-hiring-advertising-sign-with-megaphone-vector-id1005496336?k=6&m=1005496336&s=612x612&w=0&h=FgJij1XlQ8goH7eO4FC0Fw_uXnZJCPkBQME_E8bFdy0="],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkEv8hK8bNBh8We4wEQ_bxuroQZRmMv6GwYBsHxZ0BNqOjzs0N0PY6LeZcP0hgITk6aY&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Xk37jEFyAe1MX4eah5JV5b6sjun2V-IFzQ&usqp=CAU"],
    ["https://assets.phenompeople.com/CareerConnectResources/GENPUS/social/OG-tag-image-1539155120447.jpg",
      "https://macrelocations.com/wp-content/uploads/2019/08/Were-Hiring-Logo.jpg"],
    ["https://seekvectorlogo.com/wp-content/uploads/2019/11/monster-com-vector-logo.png",
      "https://cdn2.f-cdn.com/contestentries/128107/13088613/54786bf09649e_thumb900.jpg"],
    ["https://cdn.phenompeople.com/CareerConnectResources/COVAGLOBAL/social/Covance_Logo-1200_630-1567765323222.jpg",
      "https://cdn.dribbble.com/users/654257/screenshots/2815871/we-are-hiring-2.gif"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStajPHo93st_AqD9O_9cXXZcrWHWxNkZIaBeB0DOAwacEIFUcJsxUC40l1zEOu5qnFgYE&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlSCZbS_zedoQiMyWqFI67ZRds4J8JC1qUXXBxmnA5y1JPJAbu7nqAHaZMWdsBeE-6Ac&usqp=CAU"],
  ]
  const img2 = [

    ["https://uspto.report/TM/88570820/mark",
      "https://uspto.report/TM/88570820/mark"],
    ["https://3.bp.blogspot.com/--HhW4zr6ZXE/WA_97grummI/AAAAAAAAA2E/2tYcibVBTJYcnCvYOvoHqYt8EuR6iPq6ACLcB/s1600/Jio-Artcile.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAeFk1CoeNbiJK2IGX1-RA3HNRi44x5FHygKJHNcEOfqBZk_KY40Nwx0jmQOwoMxwmDm4&usqp=CAU"],
    ["https://img.etimg.com/thumb/msid-71924764,width-1070,height-580,imgsize-39920,overlay-ettech/photo.jpg",
      "https://previews.123rf.com/images/arcady31/arcady311203/arcady31120300050/12894963-apply-now-stamp.jpg"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQ2dsSDJTTZvLKl5GWR0sadHO0O_0CyXGppuGVjewdrrDKDtdWA6nSLpKI5yThmXqn78&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVGr8pqSQWINeKCpZ-wQQBx8tgtadDUn_M3KGWP7DBmS9MsFtT2hqIYv9kB-znJKqjqg&usqp=CAU"],
    ["https://entrepreneurship.columbia.edu/wp-content/uploads/2013/08/Full-Stack-Marketing-Logo.jpg",
      "data:image/jpeg;base64,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"],
    ["https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo-history.jpg",
      "https://toppng.com/uploads/preview/apply-now-icon-11563344357fcrjmhujah.png"],
    ["https://www.ssp-worldwide.com/wp-content/uploads/mphasis-tile-logo.png",
      "data:image/png;base64,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"],
    ["data:image/png;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlyGfBSI3XxrSloW-Gd-vBu9oFxi_eWAIehlbnOEMwyYOs_QMPn4jVp6ETy5-_3QS0hk&usqp=CAU"],
    ["https://finmedium.com/wp-content/uploads/2020/09/Birlasoft-logo-with-CK-Birla-group-01-1024x460.png",
      "https://www.kindpng.com/picc/m/246-2461477_applynow-apply-now-png-transparent-png.png"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyo8gz54RkYYEiXkhUCPV01j2pqzxL8GZjVzpJkQ7c5u03r1rWrZ7JP-Bgn2rHtbxk024&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiifqyNQgNZ50igx10Tmy5dNmcBpAWwS4dlxXgM6H_A4Zmn_th2vwiVVJ9WAEEqH55-L4&usqp=CAU"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtYDKw-7dQNG7g-X8cu-zpXYnSH4Iwkimeg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FjXvtFZPGAk1bX3eMZUn10po6pHmefi35DUiEcG7RfT5uK4b9v0ZYgfM7FA8_wUy7ns&usqp=CAU"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8GN6LIgkK8Dfl1wYC8KyCCZTDYYI-KIceO7u7OA0lmcYKO7Wd4qfU9QaC0Owp9RKjqM&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfoyu2Vvk0afRZ3OsgvTrduKPv6wSsURGP2_E6p7aYpQYstDqRc5yCZw0mUSEiSdN1Jw&usqp=CAU"],
    ["",
      ""],
  ]
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(1);


  useEffect(() => {
    setInterval(() => {
      setState((prev) => {
        if (prev === 0) {
          // clearInterval(id);
          return prev + 1;
        }
        return prev - 1;
      });
    }, 2000);
  }, []);
  useEffect(() => {
     setInterval(() => {
      setState2((prev) => {
        if (prev === 0) {
          // clearInterval(id);
          return prev + 1;
        }
        return prev - 1;
      });
    }, 3000);
  }, []);

  //   useEffect(() => {
  //     console.log("updated to", state);

  //   }, [state2]);

  return (
    <div>
      <div className={styles.hiring}>
        <img className={styles.compName} alt="Company logo" src={img[0][state2]}></img>
        <img className={styles.compName} alt="Company logo" src={img[1][state]}></img>
        <img className={styles.compName} alt="Company logo" src={img[2][state2]}></img>
        <img className={styles.compName} alt="Company logo" src={img[3][state]}></img>
        <img className={styles.compName} alt="Company logo" src={img[4][state2]}></img>
        <img className={styles.compName} alt="Company logo" src={img[5][state]}></img>
      </div>
      <div style={{ display: "flex" }}>
        <div className={styles.hiring2}>
          <img className={styles.compName2} alt ="Company logo" src={img2[0][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[1][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[2][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[3][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[4][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[5][state]}></img>
          <img className={styles.compName} alt ="Company logo" src={img[4][state2]}></img>
          <img className={styles.compName} alt ="Company logo" src={img[2][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[6][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[7][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[8][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[9][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[10][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[11][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[0][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[1][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[2][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[3][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[4][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[5][state]}></img>
          <img className={styles.compName} alt ="Company logo" src={img[4][state2]}></img>
          <img className={styles.compName} alt ="Company logo" src={img[2][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[6][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[7][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[8][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[9][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[10][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[11][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[0][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[1][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[2][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[3][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[4][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[5][state]}></img>
          <img className={styles.compName} alt ="Company logo" src={img[4][state2]}></img>
          <img className={styles.compName} alt ="Company logo" src={img[2][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[6][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[7][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[8][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[9][state2]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[10][state]}></img>
          <img className={styles.compName2} alt ="Company logo" src={img2[11][state2]}></img>

        </div>
        <CenterPagination />


      </div>


    </div>
  );
};
