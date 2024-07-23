import { Blog } from "../models/Blog.js";
import { uploadImageCloudinary } from "../utils/imageUploader.js";
import { respond } from "../utils/response.js";
import { calculateReadingTime } from "../utils/readingTime.js";

export const createBlog = async(req,res)=>{
    try{

        const existingBlog = await Blog.findOne({ title: req.body.title });

        if (existingBlog) {
            return res.status(400).json({ message: 'Blog with this title already exists' });
        }

        const {title,content,author,tags:_tags} = req.body;

        const thumbnail = req.files.thumbnailImage;
        const tags = JSON.parse(_tags);
        // console.log(tags);

        if(!title || !content || !author || !thumbnail || ! tags.length){
            return respond(res, "All fields are required", 400, false);
        }

        const thumbnailImage = await uploadImageCloudinary(
            thumbnail,
            process.env.FOLDER_NAME
          );
        
        const readingTime = calculateReadingTime(content);

        const newBlog = await Blog.create({
            title,
            content,
            author,
            thumbnailImage: thumbnailImage.secure_url,
            tags,
            readingTime
        });

        return respond(res, "Your blog has been created  successfully", 200, true, newBlog);
        
    }catch(error){
        console.log(error);
        return respond(
            res,
            "something went wrong while creating new blog",
            500,
            false
          );
    }
}

export const updateBlog = async(req, res)=>{
    try{     
        const {blogId,...updates} = req.body;
       
        // console.log(req.body);
        // console.log("Updates : ",updates)

        const blog = await Blog.findById(blogId);

        if(!blog){
            return respond(res,"Blog is not found",400,false);
        }

        if(req.files){
            const thumbnail = req.files.thumbnailImage;
           const thumbnailImage =  await uploadImageCloudinary(thumbnail,process.env.FOLDER_NAME);
           blog.thumbnailImage = thumbnailImage.secure_url;
        }

        // Update only the fields that are present in the request body
     for (const key in updates) {
        
        if (updates.hasOwnProperty(key)) {
          if (key === "tags") {
            blog[key] = JSON.parse(updates[key])
          } else {
            blog[key] = updates[key]
          }
        }
      }

      await blog.save();

      return respond(res, "Your blog has been edited successfully", 200, true, blog);
 
    }catch(error){
        console.log(error);
        return respond(
            res,
            "something went wrong while editing blog",
            500,
            false
          );
    }
}

export const getAllBlog = async(req,res)=>{
    try{

        const blogs = await Blog.find({});

        return respond(res,"All the blogs fetched successfully",200,true,blogs);

    }catch(error){
        console.log(error);
        return respond(res,"Error while getting all the blogs.",500,false);
    }
}

export const deleteBlog = async(req,res)=>{
    try{

        const { blogId } = req.body;

        if (!blogId) {
            return res.status(400).json({
                success: false,
                message: "blog ID is required",
            });
        }

        await Blog.findByIdAndDelete(blogId);

        return respond(res,"Blog deleted successfully",200,true);

    }catch(error){
        console.log(error);
        return respond(res,"Error in deleting blogs",500);
    }
}

export const getBlogById = async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id);
        if(!blog){
            return respond(res,"Blog is not found.",400,false);
        }
        return respond(res,"One blog by id is fetched successfully",200,true,blog);
    }
    catch(error){
console.log(error);
return respond(res,"Error while fetching blogs by id",500,false)
    }
}