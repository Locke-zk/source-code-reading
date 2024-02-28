import qs from "qs";

console.log(qs.parse("foo=bar&foo=baz", { duplicates: "last" }));
