"use client";
import { OrderContext } from "@/context/OrderContext";
import { ProductTagsPropsDataType } from "@/utils/models";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SearchBar(data: ProductTagsPropsDataType) {
  const { tagsToFilter, setTagsToFilter } = useContext(OrderContext);
  const { register, watch } = useForm( {defaultValues: {checkbox: []}})

 const valueToFilter = watch("checkbox")

 useEffect(() => {
    function handleSelected(value: any) {
        if (!tagsToFilter.includes(value)) {
          setTagsToFilter([value]);
        }
      }
      handleSelected(valueToFilter)
 }, [tagsToFilter, valueToFilter, setTagsToFilter])

  return (
    <>
      {/* <select
        defaultValue={[]}
        multiple
        onChange={(e) => {
          const options = [...e.target.selectedOptions];
          handleSelected(options.map((option) => option.value));
        }}
        className="w-80 h-4 p-3 bg-base-input outline-0 rounded border border-base-button appearance-none focus:border-yellow-dark"
      >
        <option disabled hidden></option>
        {data.tags.map((tag) => (
          <option
            className="capitalize"
            key={tag.attributes.type}
            value={tag.id}
          >
            {tag.attributes.type}
          </option>
        ))}
      </select> */}

      <div className="flex justify gap-3 p-2 bg-base-input outline-0 rounded border border-base-button appearance-none focus:border-yellow-dark">
        {data.tags.map((tag) => (
          <label key={tag.id} className="check-label disable-select flex justify-center px-3 py-2 cursor-pointer rounded-full text-yellow-dark font-Roboto text-[0.625rem] leading-3 uppercase font-bold">
            <input {...register("checkbox")} className="w-0 opacity-0" type="checkbox" value={tag.id} />
            {tag.attributes.type}
          </label>
        ))}
      </div>
    </>
  );
}
