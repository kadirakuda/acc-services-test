import { useState } from "react";

async function searchAPI() {
  const data = { name: "John" };
  const key = "ZGVjYWMzMTctM2E5MC00OTM2LThmNzktYzkzYzY1YWExNTAxOg==";
  try {
    let response = await fetch(
      `https://api.companieshouse.gov.uk/company/12766307`,
      {
        method: "get",
        headers: {
          Authorization: "Basic " + key,
          "Content-Type": "text/json",
          Origin: "https://localhost:3000",
          "Access-Control-Allow-Origin": "https://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          // "Access-Control-Allow-Headers":
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        },
        mode: "cors",
        cache: "default",
      }
    );
    let data = await response.text();
    return data;
  } catch (err) {
    return err;
  }
}

async function main() {
  console.log("first");

  let result = await searchAPI();
  console.log(result);

  console.log("second");
}

main();
