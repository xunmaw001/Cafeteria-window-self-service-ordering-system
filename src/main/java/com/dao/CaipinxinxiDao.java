package com.dao;

import com.entity.CaipinxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.CaipinxinxiVO;
import com.entity.view.CaipinxinxiView;


/**
 * 菜品信息
 * 
 * @author 
 * @email 
 * @date 2022-04-16 17:00:44
 */
public interface CaipinxinxiDao extends BaseMapper<CaipinxinxiEntity> {
	
	List<CaipinxinxiVO> selectListVO(@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);
	
	CaipinxinxiVO selectVO(@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);
	
	List<CaipinxinxiView> selectListView(@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);

	List<CaipinxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);
	
	CaipinxinxiView selectView(@Param("ew") Wrapper<CaipinxinxiEntity> wrapper);
	

}
