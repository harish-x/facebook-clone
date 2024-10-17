"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React, {  useState } from "react";
import { updateProfile } from "@/lib/actions";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";

const UpdateUser = ({ user }: { user: User }) => {
  const [isopen, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

 
  return (
    <div>
      <div
        className="text-blue-500 test-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update User
      </div>
      {isopen && (
        <div className="absolute w-full min-h-screen top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              await updateProfile(
                new FormData(event.currentTarget),
                cover?.secure_url
              );
              setOpen(false);
            }}
            className="p-12 bg-white rounded-lg shadow-md  flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative mt-5"
          >
            <h1>Update Profile</h1>
            <CldUploadWidget
              uploadPreset="facebook-clone"
              onSuccess={(state) => {
                const uploadInfo = state as CloudinaryUploadWidgetInfo;
                const secureUrl = uploadInfo.info;
                setCover(secureUrl);
              }}
            >
              {({ open }) => {
                return (
                  <div className="flex flex-col gap-4 my-4">
                    <label htmlFor="">Cover Picture</label>
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => open()}
                    >
                      <Image
                        src={user.cover || "/noCover.png"}
                        alt=""
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md onject-cover"
                      />
                      <span className="text-gray-600 text-xs underline">
                        change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            <div className="flex flex-row flex-wrap  gap-2 xl:gap-4 justify-center ">
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.name || "Your Firstname"}
                  name="name"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Surname
                </label>
                <input
                  type="text"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.surname || "Your Last Name"}
                  name="surname"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Description
                </label>
                <input
                  type="text"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.description || "Your Description"}
                  name="description"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  City
                </label>
                <input
                  type="text"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.city || "Your City"}
                  name="city"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  School
                </label>
                <input
                  type="text"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.school || "school you studied"}
                  name="school"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Work
                </label>
                <input
                  type="text"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.work || "Company Name"}
                  name="work"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  type="text"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  placeholder={user.website || "Your website"}
                  name="website"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 p-2 mt-2 rounded-md text-white"
            >
              Update
            </button>
            <div
              className="absolute top-3 right-3 cursor-pointer flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <span className="text-white text-2xl bg-red-500 rounded-full w-4 h-4 p-1 "></span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
