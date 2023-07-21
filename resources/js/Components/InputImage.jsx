import React, { useState } from 'react'
import { Input } from './ui/input';
import { Label } from './ui/label';
import Resizer from "react-image-file-resizer";
import InputError from './InputError';

function InputImage({
    data,
    setData,
    errors,
    width = 100,
    height = 100,
    name = "image",
    label = "Image",
    defaultimage = null,
    
    
}) {
    const [imagePreview, setImagePreview] = useState(null); // [1
    const resizeImage = (file) => {
        const maxWidth = width;
        const maxHeight = height;

        Resizer.imageFileResizer(
            file,
            maxWidth,
            maxHeight,
            "JPEG",
            100,
            0,
            (file) => {
               
               setData({
                    ...data, [name]: file,
               } )
                setImagePreview(URL.createObjectURL(file));
            },
            "file"
        );
    };
  return (
    <div className="grid grid-cols-3 space-y-1 ">
    <div className="space-y-1">
        <Label htmlFor="name">{label}</Label>
        <Input
            onChange={(e) => {
                const file = e.target.files[0];
                resizeImage(file);
            }}
            id={name}
            name={name}
            type="file"
            accept="image/*"
        />
        <InputError errors={errors} fieldName={name} />
        {imagePreview && (
            <div className="flex py-4 mt-4">
                <img
                    src={imagePreview}
                    alt=""
                    className="border border-gray-300 rounded-lg shadow-lg max-h-64"
                />
            </div>
        )}
    {defaultimage && (
        <div className="flex py-4 mt-4">
            <img
                src={`/images/topics/${defaultimage}`}
                alt=""
                className="border border-gray-300 rounded-lg shadow-lg max-h-64"
            />
    </div>
 
    )}
    </div>
 
</div>
  )
}

export default InputImage