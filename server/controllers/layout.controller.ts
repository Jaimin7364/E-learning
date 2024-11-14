import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import LayoutModel from "../models/layout.model";
import cloudinary from "cloudinary";

// Create Layout
export const createLayout = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { type } = req.body;

        const isTypeExist = await LayoutModel.findOne({ type });
        if (isTypeExist) {
            return next(new ErrorHandler(`${type} layout already exists`, 400));
        }

        if (type === "Banner") {
            const { image, title, subTitle } = req.body;
            const myCloud = await cloudinary.v2.uploader.upload(image, {
                folder: "layout",
            });
            const banner = {
                type: "Banner",
                banner: {
                    image: {
                        public_id: myCloud.public_id,
                        url: myCloud.secure_url,
                    },
                    title,
                    subTitle
                },
            };
            await LayoutModel.create(banner);
        }

        if (type === "FAQ") {
            const { faq } = req.body;
            const faqItems = await Promise.all(
                faq.map(async (item: any) => ({
                    question: item.question,
                    answer: item.answer
                }))
            );
            await LayoutModel.create({ type: "FAQ", faq: faqItems });
        }

        if (type === "Categories") {
            const { categories } = req.body;
            const categoriesItems = await Promise.all(
                categories.map(async (item: any) => ({
                    title: item.title,
                }))
            );
            await LayoutModel.create({ type: "Categories", categories: categoriesItems });
        }

        res.status(200).json({
            success: true,
            message: "Layout created successfully",
        });

    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});

// Edit Layout
export const editLayout = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { type } = req.body;
        const layoutData = await LayoutModel.findOne({ type });

        if (type === "Banner" && layoutData) {
            const { image, title, subTitle } = req.body;

            if (layoutData.banner?.image?.public_id) {
                await cloudinary.v2.uploader.destroy(layoutData.banner.image.public_id);
            }

            const myCloud = await cloudinary.v2.uploader.upload(image, { folder: "layout" });
            const updatedBanner = {
                image: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
                title,
                subTitle
            };

            await LayoutModel.findByIdAndUpdate(layoutData._id, { banner: updatedBanner });
        }

        if (type === "FAQ" && layoutData) {
            const { faq } = req.body;
            const faqItems = await Promise.all(
                faq.map(async (item: any) => ({
                    question: item.question,
                    answer: item.answer
                }))
            );
            await LayoutModel.findByIdAndUpdate(layoutData._id, { faq: faqItems });
        }

        if (type === "Categories" && layoutData) {
            const { categories } = req.body;
            const categoriesItems = await Promise.all(
                categories.map(async (item: any) => ({
                    title: item.title,
                }))
            );
            await LayoutModel.findByIdAndUpdate(layoutData._id, { categories: categoriesItems });
        }

        res.status(200).json({
            success: true,
            message: "Layout updated successfully",
        });

    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});

// Get Layout by Type (Updated)
export const getLayoutByType = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Use req.params to get 'type' from the URL
        const { type } = req.params;

        const layout = await LayoutModel.findOne({ type });

        if (!layout) {
            return next(new ErrorHandler(`No layout found for type: ${type}`, 404));
        }

        res.status(200).json({
            success: true,
            layout,
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});
