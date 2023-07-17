import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchData } from "../helper/helpers";
import { TselectedOptions } from "@/types/types";

export function useOptions() {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<TselectedOptions>({});

  useEffect(() => {
    const { sort, language, category, page } = selectedOptions;

    // fetchData(sort, language, category, page, selectedOptions);

    const urlParams = new URLSearchParams();
    Object.entries(selectedOptions).forEach(([key, value]) => {
      if (value) {
        urlParams.set(key, value);
      }
    });
    const url = `?${urlParams.toString()}`;
    router.push(url);
  }, [selectedOptions]);

  return [selectedOptions, setSelectedOptions];
}
