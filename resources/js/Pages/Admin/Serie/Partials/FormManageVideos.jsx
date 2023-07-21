import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "@/Components/ui/card";
import { convertSecondsToMinutes } from "../../../../../lib/Helper";
import { IconEye, IconPencil } from "@tabler/icons-react";

function FormManageVideos({ videos }) {
    const handleDragEnd = (result) => {
        console.log(result);
    };

    return (
        <div className="">
            <DragDropContext  onDragEnd={handleDragEnd}>
                <Droppable droppableId="videos">
                    {(provided) => (
                        <div className=""
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {videos.map((video, index) => (
                                <Draggable
                                    key={video.order_num}
                                    draggableId={video.order_num.toString()}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            <Card className="p-4 my-4">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-semibold font-poppins">
                                                        {video.title}
                                                    </h3>
                                                    <span className="flex items-center text-sm font-semibold gap-x-2">
                                                        <span>
                                                            {convertSecondsToMinutes(
                                                                video.seconds_time
                                                            )}
                                                        </span>
                                                        <IconPencil className="w-4 h-4" />
                                                    </span>
                                                </div>
                                                <a
                                                    href={`https://www.youtube.com/watch?v=${video.unique_video_id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block mt-2 text-xs underline text-accent-foreground"
                                                >
                                                    https://www.youtube.com/watch?v=
                                                    {video.unique_video_id}
                                                </a>
                                                {/* Add other card content here */}
                                            </Card>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default FormManageVideos;
